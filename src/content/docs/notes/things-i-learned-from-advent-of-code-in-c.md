Recursion

In C nothing is really built for you, you end up doing a lot of it yourself.

The concept of lists, and how they're really just pointers to positions in memory. Traversing a list requires you to update the pointer address by the amount of the type. So for int, you would increase by the sizeof(int)

Also strings aren't free and complex to work with. you need to terminate them so whatever word you are doing typically stores 1 extra null character
- Prepend is expensive, need to memcopy the entire word over by 1 space
- Append is inexpensive given you are within the bounds of pre allocated memory. So if you go to append at the last spot, you need to find a new memory location
- Everything in memory works super interestingly, operations that other languages make trivial is actually complex
- I always forget to free shit
- booleans are truly just 0 and 1- booleans are truly just 0 