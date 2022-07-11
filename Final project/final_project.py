from datetime import datetime, timedelta


#This is BOB, my personal assistant that I made to do a few tasks. He can do only do 4 tasks which are telling the date, use a calculator to calculate numbers, make a list, and make appointments and stores them in a dictionary.

print("---------------------------------------------------")
print("Hello homosapien! My name is BOB! I am an artificial intelligence that was crated by my grand master, Joseph Santos. I will be your personal assistant for today. I am programmed to help all of the homosapiens with their daily tasks. So, don't be shy when using me. ;)")
NAME = input("What is your name homosapien? \n")
print(f"Hello {NAME}! I am very happy to meet you! Now you are my favorite homosapien. :)")

LIST_FROM_USER = []
SCHEDULE = {}

def main():
    print()
    print("---------------------------------------------------") 
    user_access = input(f"What do you want me to do today, {NAME}? OPTIONS: (1)To know the date, (2)Calculator, (3)To make a list, or (4)To scheudle an appointment (5)Quit BOB: ")

    while user_access != 5:
        if user_access == "1":
            print("Okay! Changing to date server now... Beep... Boop... Bop... :)")
            print("---------------------------------------------------") 
            date_time()
        elif user_access == "2":
            print("Okay! Changing to calculator server now... Beep... Boop... Bop... :)")
            print("---------------------------------------------------") 
            calculator()
        elif user_access == "3":
            print("Okay! Changing to list server now... Beep... Boop... Bop... :)")
            print("---------------------------------------------------") 
            making_list()
        elif user_access == "4":
            print("Okay! Changing to make appointment server now... Beep... Boop... Bop... :)")
            print("---------------------------------------------------") 
            making_schedule()
        else:
            print()
            print(f"Awe... Okay... See you next time {NAME}... ;( \n")
            print("---------------------------------------------------") 
        break

def date_time():   

    #The date function where you asked what date is today and yesterday, which both shows the time. 
    user_acesss_date = input(f"What would you like to know about the date, {NAME}? (1)What date is today? (2)What date was yesterday? or (3)Return to main menu: ")
    
    if user_acesss_date == "1":
            print()
            today = datetime.now()
            print(f"Today is: {today}")
            print()
            return date_time()
    elif user_acesss_date == "2":
            print()
            one_day = timedelta(days=1)
            today = datetime.now()
            yesterday = today - one_day
            print(f"Yesterday was {yesterday} \n")
            return date_time()
    elif user_acesss_date == "3":
            print()
            print("Changing to main menu now... ;)")
            print()
            main()
    else:
        print()
        print("I am not programmed to do that. Please try again... xD")
        print()
        return date_time()
       
def calculator():
    #Here is the calculator where BOB asks for you to put an operation and numbers to calculate for you. 

    print(f"{NAME} please enter the following below:")
    op = input("What math operation do you want to do ( *, / , + , -)?  ")
    num1 = float(input("What is your first number? "))
    num2 = float(input("What is your second number? "))
        
    if op == "*":
        ans = num1 * num2
    elif op == "/":
        ans = num1 // num2
    elif op == "+":
        ans = num1 + num2
    else:
        ans = num1 - num2
    print(f"{num1} {op} {num2} = {ans: .2f}")

    print()
    user = input(f"{NAME}, do you still want me to use the calculator?(Y/N): ")
    print()

    if user.upper() == "Y":
        return calculator()
    elif user.upper() == "N":
        print(f"Changing back to main menu {NAME}... Beep... Boop... Bop... :)")        
        main()
    else:
        print(f"Not the right command, silly homosapien xD... Try again.")
        return calculator()
    

def making_list():
    #Here is the list where bob can stores items for you. Such as groceries or things to remember.

    asking_user = input(f"{NAME} do you want to see your list, add items to your list, or remove items from your list? (1)Show list, (2)Add items to list, (3)Remove an item from list, and (4)Return to main menu:  ")

    if asking_user == "1":
        print()
        print(LIST_FROM_USER)
        print()
        return making_list()
    elif asking_user == "2":
        print()
        items = input("What do you want to add to your list? ")
        LIST_FROM_USER.append(items)
        print()
        return making_list()
    elif asking_user == "3":
        print()
        print(LIST_FROM_USER)
        print()
        remove_items = input(f"What item would you like me to remove from your list? ")
        LIST_FROM_USER.remove(remove_items)
        print()
        print(LIST_FROM_USER)
        print()
        return making_list()
    elif asking_user == "4":
        print("Changing back to main menu... Beep... Boop... Bop... :)")
        main()
    else:
        print()
        print(f"Silly {NAME}, I don't know how to do that command xD... Please try again.")
        return making_list()


def making_schedule():
#This is where BOB makes a schdule and appointments, storng them in an dictionary. 

    asking_user = input("Do you want me to show you your appointments, add appointments, or remove any appointments? (1)Show appointments, (2)Add appointments, (3)Remove appointments, or (4)Return to main menu: ")
    if asking_user == "1":
        print()
        print(SCHEDULE)
        print()
        return making_schedule()
    elif asking_user == "2":
        print()
        location = input(f"Where is the location of your appointment, {NAME}? ")
        date_time = input(f"What time and date will the appointment be at {NAME} (Type: M/D/Y, time)? ")
        SCHEDULE[location] = date_time
        print()
        print(SCHEDULE)
        print()
        return making_schedule()
    elif asking_user == "3":
        print()
        print(SCHEDULE)
        print()
        remove_appointment = input(f"What appointment would you like me to remove for you, {NAME} (Type in the location to remove an appointment :) )? ")
        SCHEDULE.pop(remove_appointment)
        print()
        print(SCHEDULE)
        print()
        return making_schedule()
    elif asking_user == "4":
        print()
        print("Changing back to main menu... Beep... Boop... Bop... :)")
        main()
    else:
        print()
        print(f"Silly {NAME} xD I can't do that command. Please try again")
        return making_schedule()

main()