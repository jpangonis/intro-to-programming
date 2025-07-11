

namespace StringCalculator;
public class CalculatorTests
{
    private Calculator _calculator = new ();

    [Fact]
    public void EmptyStringReturnsZero()
    {
      

        var result = _calculator.Add("");

        Assert.Equal(0, result);
    }

    [Theory]
    [InlineData("1",1)]
    [InlineData("2",2)]
    [InlineData("420",420)]
    public void CanAddSingleInteger(string numbers, int expected)
    {
       
        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("1,2", 3)]
    [InlineData("2,2", 4)]
    [InlineData("12,10", 22)]
    
    public void CanAddTwoNumbers(string numbers, int expected)
    {
        
        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("1,2,3", 6)]
    

    public void ArbitraryLength(string numbers, int expected)
    {
       
        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("1\n2", 3)]
    [InlineData("1,2\n3", 6)]

    public void NewLineDelimeters(string numbers, int expected)
    {

        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("//;\n1;2", 3)]
    [InlineData("//;\n1;4",5)]
    [InlineData("//*\n1*2", 3)]

    public void CustomDelimeters(string numbers, int expected)
    {

        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("1,-2,3")]
    [InlineData("-1,2,-3")]
    [InlineData("//;\n1;-2")]

    public void ThrowsWhenNegative(string values)
    {
        var calculator = new Calculator();
        Assert.Throws<ArgumentException>(() => calculator.Add(values));
    }

    [Theory]
    [InlineData("1,-2,3", "Negative numbers: -2")]
    [InlineData("-1,2,-3", "Negative numbers: -1,-3")]
    [InlineData("//;\n1;-2", "Negative numbers: -2")]

    public void ThrowsTheNumbersWhenNegative(string values, string expectedMessage)
    {
        var calculator = new Calculator();
        var exception = Assert.Throws<ArgumentException>(() => calculator.Add(values));
        Assert.Equal(expectedMessage, exception.Message);
    }

    [Theory]
    [InlineData("2,3,9876", 5)]
    [InlineData("1,999, 10342", 1000)]
    [InlineData("//*\n1002*2,5", 7)]

    public void RemovesNumbersGreaterThan1000(string numbers, int expected)
    {

        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("//[***]\n1***2", 3)]
    [InlineData("//[``````]\n1``````7", 8)]
    [InlineData("//[&&]\n6&&1002&&50", 56)]

    public void CustomDelimiterOfAnyLength(string numbers, int expected)
    {

        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("//[***, #, !]\n1***2#3\n1!2", 9)]
    [InlineData("//[&, ^, @,$$$]\n1$$$2^3\n1&2^6", 15)]
    [InlineData("//[*******, ^]\n1*******2^6", 9)]

    public void MultipleCustomDelimiters(string numbers, int expected)
    {

        var result = _calculator.Add(numbers);
        Assert.Equal(expected, result);
    }
}

