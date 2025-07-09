

namespace StringCalculator;
public class CalculatorTests
{
    [Fact]
    public void EmptyStringReturnsZero()
    {
        var calculator = new Calculator();

        var result = calculator.Add("");

        Assert.Equal(0, result);
    }

    [Theory]
    [InlineData("3",3)]
    [InlineData("101", 101)]
    [InlineData("25", 25)]
    public void CanAddSingleNumber(string value, int expected)
    {
        var calculator = new Calculator();
        var result = calculator.Add(value);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("3,2", 5)]
    [InlineData("11,4", 15)]
    [InlineData("25,25", 50)]
    public void CanAddTwoNumbers(string value, int expected)
    {
        var calculator = new Calculator();
        var result = calculator.Add(value);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("3,4,5", 12)]
    [InlineData("1,2,3,4,5,6,7,8,9", 45)]
    [InlineData("4,7,10", 21)]
    public void CanAddManyNumber(string value, int expected)
    {
        var calculator = new Calculator();
        var result = calculator.Add(value);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("1\n2", 3)]
    [InlineData("1\n2,3", 6)]
    public void CanAddMixNumber(string value, int expected)
    {
        var calculator = new Calculator();
        var result = calculator.Add(value);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("#\n1#2#3", 6)]
    public void CanAddAnyDelimiterNumber(string value, int expected)
    {
        var calculator = new Calculator();
        var result = calculator.Add(value);
        Assert.Equal(expected, result);
    }
}
