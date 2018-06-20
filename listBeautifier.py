def listBeautifier(a):
    res = a[:]
    while res and res[0] != res[-1]:
        a, *res, c = res
    return res
