# Typescript

Typescript is kind of like an upgraded version of JavaScript. It's still used for making websites and web apps, but it has some extra features that make it easier for us programmers to write code that works the way we want it to.

With Typescript, we can write code that's a bit more organized and easier to read. We can also catch errors in our code before we even run it, which saves us a lot of time and headaches. Think of it like spell check for your code!

One of the biggest differences between Typescript and JavaScript is that with Typescript, we have to specify what type of data we're working with. For example, we might say that a certain variable is a number, or a string, or a boolean. This might sound a bit confusing, but it actually helps us avoid some common mistakes that can happen when we're working with data.

## task_0
I created an interface named Student which has the following elements: firstName(string), lastName(string), age(number), and location(string). Then, I created two student variables and added them to an array named studentsList. I used Vanilla Javascript to render a table and for each element in the studentsList array, I appended a new row to the table. Each row contains the first name of the student and the location.

## task_1
I created a directory named task_1 and copied the following configuration files into it: package.json, tsconfig.json, webpack.config.js.

I created a Teacher interface which has the following attributes:

firstName(string) and lastName(string). These two attributes can only be modified when a Teacher is first initialized.
fullTimeEmployee(boolean): This attribute should always be defined.
yearsOfExperience(number): This attribute is optional.
location(string): This attribute should always be defined.
I also added the possibility to add any attribute to the object without specifying the name of the attribute.

## task_2
I wrote an interface named Directors that extends Teacher and requires an attribute named numberOfReports(number).

## task_3
I wrote a function named printTeacher that accepts two arguments firstName and lastName and returns the first letter of the firstName and the full lastName (e.g. "John Doe" -> "J. Doe").

I also created an interface named printTeacherFunction to describe the function.

## task_4
I created a StudentClass class with the following attributes:

The constructor accepts firstName(string) and lastName(string) arguments.
The class has a method named workOnHomework that returns the string "Currently working".
The class has a method named displayName that returns the firstName of the student.
The constructor of the class is described through an interface named StudentClassConstructor.
The class is described through an interface named StudentClassInterface.

## task_5
I created the DirectorInterface interface with the following methods:

workFromHome() returning a string.
getCoffeeBreak() returning a string.
workDirectorTasks() returning a string.
I also created the TeacherInterface interface with the following methods:

workFromHome() returning a string.
getCoffeeBreak() returning a string.
workTeacherTasks() returning a string.
I created a Director class that implements the DirectorInterface. The Director class has the following methods:

workFromHome() that returns the string "Working from home".
getToWork() that returns the string "Getting a coffee break".
workDirectorTasks() that returns the string "Getting to director tasks".
I also created a Teacher class that implements the TeacherInterface. The Teacher class has the following methods:

workFromHome() that returns the string "Cannot work from home".
getCoffeeBreak() that returns the string "Cannot have a break".
workTeacherTasks() that returns the string "Getting to work".
I finally created a function named createEmployee with the following requirements:

It can return either a Director or a Teacher instance.
It accepts 1 argument: salary (either number or string).
If salary is a number and less than 500, it returns a new Teacher instance. Otherwise, it returns a new Director instance.
