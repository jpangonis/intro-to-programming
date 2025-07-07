using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace References.Tests;

public class AddingNumbers
{
    [Fact]
    public void CanAddTwoNumbers()
    {
        // Given
        int a = 10;
        int b = 20;
        int answer;

        // When
        answer = a + b;

        //Then
        // Answer should be 30
        Assert.Equal(30, answer);
    }

    [Theory]
    [InlineData(10,20,30)]
    [InlineData(2,2,4)]
    public void CanAddAnyTwoIntegers(int a, int b, int expected)
    {
        int answer = a + b;
        Assert.Equal(expected, answer);
    }
}
