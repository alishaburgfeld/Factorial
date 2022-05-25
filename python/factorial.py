def factorial(num):
	answer=1
	for x in range(1,num+1):
		answer*=x
	return answer

print(factorial(5))
