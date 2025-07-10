
using System;
using System.Linq;
using System.Numerics;
using NSubstitute.ReturnsExtensions;

public class Calculator
{
    public int Add(string numbers)
    {
        //if ((numbers.IndexOf(',') != -1) || (numbers.IndexOf("\n") != -1) || (numbers.IndexOf("#") != -1))
        //{

        //    char[] delimiters = [',', '\n', '#'];
        //    int result = 0;
        //    string[] number = numbers.Split(delimiters);
        //    foreach (string num in number)
        //        if (num != "")
        //            result += int.Parse(num);
        //    return result;
        //}
        //else
        //{
        //    return numbers == "" ? 0 : int.Parse(numbers);
        //}

        List<char> delimiters = [ ',', '\n' ];
        if (numbers == "")
        {
            return 0;
        }
        if (numbers.StartsWith("//"))
        {
            var delimiter = numbers[2];
            delimiters.Add(delimiter);
            numbers = numbers[4..];
        }
        
        return numbers.Split([.. delimiters]) //string
                .Select(n => int.Parse(n)) //Select -> map
                .Sum(); //add
    }
}
