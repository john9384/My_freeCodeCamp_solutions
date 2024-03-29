class CustomError(Exception):
    def __init__(self, message=""):
        self.message = message

def arithmetic_arranger(problems, val=False):
    try:
        arranged_problems = ''
        if len(problems) > 5:
            raise CustomError("Error: Too many problems.")

        # Operations error check
        operations = list(map(lambda x: x.split()[1], problems))
        if set(operations) != {'+', '-'} and len(set(operations)) != 2:
            return "Error: Operator must be '+' or '-'."

        numbers = []  # list of all operands in str format
        for i in problems:
            p = i.split()
            numbers.extend([p[0], p[2]])

        if not all(map(lambda x: x.isdigit(), numbers)):
            arranged_problems = "Error: Numbers must only contain digits."
            return arranged_problems

        if not all(map(lambda x: len(x) < 5, numbers)):
            arranged_problems = "Error: Numbers cannot be more than four digits."
            return arranged_problems

        top_row = ''
        dashes = ''
        values = list(map(lambda x: eval(x), problems))
        solutions = ''
        for i in range(0, len(numbers), 2):
            space_width = max(len(numbers[i]), len(numbers[i+1])) + 2
            top_row += numbers[i].rjust(space_width)
            dashes += '-' * space_width
            solutions += str(values[i // 2]).rjust(space_width)
            if i != len(numbers) - 2:
                top_row += ' ' * 4
                dashes += ' ' * 4
                solutions += ' ' * 4

        bottom_row = ''
        for i in range(1, len(numbers), 2):
            space_width = max(len(numbers[i - 1]), len(numbers[i])) + 1
            bottom_row += operations[i // 2]
            bottom_row += numbers[i].rjust(space_width)
            if i != len(numbers) - 1:
                bottom_row += ' ' * 4

        if val:
            arranged_problems = '\n'.join((top_row, bottom_row, dashes, solutions))
        else:
            arranged_problems = '\n'.join((top_row, bottom_row, dashes))
        return arranged_problems
    except CustomError as error:
        return error.message
