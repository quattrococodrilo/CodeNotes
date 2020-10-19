# Argparse

## Basics 

    import argparse

    parser = argparse.ArgumentParser(description="This is opcional")
    parser.parse.args()

By default __--help__ or __-h__ argument shows help message.

## Positional Arguments

    parser = argparse.ArgumentParser()
    parser.add_argument("echo", help="echo the string")
    args = parser.parse_args()
    print(args.echo)

__add_argument__ syntax:
    
    add_argument(
        "-short", 
        "--argument_name",
        help="argument description",
        type=int/byDegaultString
    )

## Actions 
    
__action="store_true"__: allows only boolean value, 
when it appears is taken as True by otherwise as False.
This creates __optional arguments__.

    parser.add_argument("--verbose", help="...", action="store_true")

__action="count"__: Counts the number of occurrences 
of a specific optional arguments. If there is not a flag
its value is considered as None.

    parser.add_argument("-v", """--verbose", help="...", action="count")
    ...
    $ python3 program -vvv
    parser.verbose == 3

## Choices

    parser.add_argument("--verbose", type=int, choices=[0,1,2], help"...")

## Default

    parser.add_argument(
        "-v", """--verbose", help="...", action="count", default=0
    )

## Group

    parser = argparse.ArgumentParser()
    group = parser.add_mutually_exclusive_group()
    group.add_argument("-v", "--verbose", action="store_true")
    group.add_argument("-q", "--quiet", action="store_true")
    parser.add_argument("x", type=int, help="the base")
    parser.add_argument("y", type=int, help="the exponent")
    args = parser.parse_args()
    answer = args.x**args.y
    
    if args.quiet:
        print(answer)
    elif args.verbose:
        print("{} to the power {} equals {}".format(args.x, args.y, answer))
    else:
        print("{}^{} == {}".format(args.x, args.y, answer))

