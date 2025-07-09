using Banking.Domain;

namespace Banking.Tests.Account
{
    public class Demo
    {
        [Fact]
        public void SomeDemo()
        {
            var barbsAccount = new BankAccount();

            var stansAccount = new BankAccount();

            Assert.Equal(barbsAccount.GetBalance(), stansAccount.GetBalance());

            stansAccount.Deposit(420.69M);

            Assert.Equal(barbsAccount.GetBalance(), stansAccount.GetBalance());
        }

    }
}
