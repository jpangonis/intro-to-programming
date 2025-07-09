
using System;
using System.Linq;

public class Calculator
{
    public int Add(string numbers)
    {
        if ((numbers.IndexOf(',') != -1) || (numbers.IndexOf("\n") != -1) || (numbers.IndexOf("#") != -1))
        {

            char[] delimiters = [',', '\n', '#'];
            int result = 0;
            string[] number = numbers.Split(delimiters);
            foreach (string num in number)
                if (num != "")
                    result += int.Parse(num);
            return result;
        }
        else
        {
            return numbers == "" ? 0 : int.Parse(numbers);
        }
    }
}
