


namespace Banking.Domain
{
    public class BankAccount
    {
        //private bool _isGoldAccount = false;
        private decimal _currentBalance = 5000;
        
        public void Deposit(decimal amountToDeposit)
        {
            //if (_isGoldAccount) { _currentBalance += 110}
            if (amountToDeposit <= 0)
            {
                throw new ArgumentOutOfRangeException();
            }
            
            _currentBalance += amountToDeposit;
        }

        public decimal GetBalance()
        {
            return _currentBalance;
        }

        public void Withdraw(decimal amountToWithdraw)
        {
            _currentBalance -= amountToWithdraw;
        }

        //public decimal GetGoldStatus()
        //{
        //    return _isGoldAccount;
        //}
    }
}