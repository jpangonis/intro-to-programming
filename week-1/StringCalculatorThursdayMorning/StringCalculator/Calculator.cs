
using Xunit.Sdk;

public class Calculator
{
    public int Add(string numbers)
    {
        List<char> delimeters = [',', '\n'];

        if (numbers == "")
        {
            return 0;
        }

        if (HasCustomDelimeters(numbers))
        {
            var FindFirstBracket = numbers.IndexOf('[');
            if (FindFirstBracket == -1)
            {
                var delimeter = numbers[2];
                delimeters.Add(delimeter);
                numbers = numbers[4..];
            }
            else
            {
                //10
                var FindEndBracket = numbers.IndexOf(']', FindFirstBracket);
                delimeters.Add(numbers[FindFirstBracket+1]);
                //11
                delimeters = FindAllDelimiters(numbers.Substring(FindFirstBracket,FindEndBracket-FindFirstBracket), delimeters);
                numbers = numbers[(FindEndBracket + 1)..];
            }

        }

        var numArray = numbers.Split([.. delimeters])
            .Where(x => x != "") //string[]
             .Select(int.Parse);// int[]
                                //.Where(num => num > 0)
                                //.Sum();

        //7
        var negatives = numArray.Where(n => n < 0);

        if (negatives.Any()) {
            string message = "";
            foreach (int n in negatives) { message += n + ","; }
            message = message.TrimEnd(',');
            throw new ArgumentException("Negative numbers: " + message);
        }
        else
        {
            return numArray.Where(x => x < 1000).Sum(); //9
        }


    }

    private bool HasCustomDelimeters(string numbers)
    {
        return numbers.StartsWith("//");
    }

    // step 11
    private List<char> FindAllDelimiters(string numbers, List<char> delimiters)
    {
        return numbers.Select(x => (char)x).ToList();
        for (int i = 0; i < numbers.Length - 1; i++)
        {
            if (numbers[i] == ',')
            {
                delimiters.Add(numbers[i + 2]);
            }
        }

        return delimiters;
    }

}
