import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { transactionActions } from 'app/state/transaction'
import * as React from 'react'
import { Provider } from 'react-redux'
import { configureAppStore } from 'store/configureStore'

import { ReclaimEscrowForm } from '..'

const renderComponent = (store: any, address: string, maxAmount: string, maxShares: string) =>
  render(
    <Provider store={store}>
      <ReclaimEscrowForm address={address} maxAmount={maxAmount} maxShares={maxShares} />
    </Provider>,
  )

describe('<ReclaimEscrowForm />', () => {
  let store: ReturnType<typeof configureAppStore>

  beforeEach(() => {
    store = configureAppStore()
    jest.resetAllMocks()
  })

  it('should match snapshot', () => {
    const component = renderComponent(store, 'dummy-address', '1000', '1000')
    expect(component.container.firstChild).toMatchSnapshot()
  })

  it('should error without an open wallet', () => {
    renderComponent(store, 'dummy-address', '1000000000000', '1000000000000')

    userEvent.type(screen.getByTestId('amount'), '1000')
    userEvent.click(screen.getByRole('button', { name: 'account.reclaimEscrow.reclaim' }))

    expect(screen.getByText('errors.noOpenWallet')).toBeInTheDocument()
  })

  it('should display the number of shares', () => {
    renderComponent(store, 'dummy-address', '1000000000000', '1000000000000')

    expect(screen.queryByTestId('numberOfShares')).toBeNull()
    userEvent.type(screen.getByTestId('amount'), '500')
    expect(screen.getByTestId('numberOfShares')).toBeInTheDocument()
  })

  it('should submit the transaction', () => {
    const spy = jest.spyOn(store, 'dispatch')
    renderComponent(store, 'dummy-address', '2000000000000', '1000000000000')

    userEvent.type(screen.getByTestId('amount'), '500')
    userEvent.click(screen.getByRole('button', { name: 'account.reclaimEscrow.reclaim' }))

    expect(spy).toHaveBeenCalledWith({
      payload: {
        amount: '500000000000',
        shares: '250000000000',
        type: 'reclaimEscrow',
        validator: 'dummy-address',
      },
      type: 'transaction/reclaimEscrow',
    } as ReturnType<typeof transactionActions.reclaimEscrow>)
  })

  it('reclaim all should submit the transaction', () => {
    const spy = jest.spyOn(store, 'dispatch')
    renderComponent(store, 'dummy-address', '2000000000000', '1000000000000')
    userEvent.click(screen.getByRole('button', { name: 'account.reclaimEscrow.reclaimAll' }))

    expect(spy).toHaveBeenCalledWith({
      payload: {
        amount: '2000000000000',
        shares: '1000000000000',
        type: 'reclaimEscrow',
        validator: 'dummy-address',
      },
      type: 'transaction/reclaimEscrow',
    } as ReturnType<typeof transactionActions.reclaimEscrow>)
  })

  it('reclaim all should work without losing precision', () => {
    const spy = jest.spyOn(store, 'dispatch')
    renderComponent(store, 'dummy-address', '1655615038322038833148', '1563114365108133939632')
    userEvent.click(screen.getByRole('button', { name: 'account.reclaimEscrow.reclaimAll' }))

    expect(spy).toHaveBeenCalledWith({
      payload: {
        amount: '1655615038322038833148',
        shares: '1563114365108133939632',
        type: 'reclaimEscrow',
        validator: 'dummy-address',
      },
      type: 'transaction/reclaimEscrow',
    })
  })
})
