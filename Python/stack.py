# -*- coding: utf-8 -*-
"""
Created on Wed Aug 18 10:06:53 2021

@author: Shreyas Torgalmath
"""

class Stack:
    #constructor
    def __init__(self):
        self.items=[]
    
    #Checking list is empty before deletion
    def is_empty(self):
        return self.items==[]
    
    #Checking list is full before insertion,assuming maximum element can be only 5
    def is_full(self):
        return len(self.items)==5
    
    #Appending element to list
    def insert(self,data):
        self.items.append(data)
        
    #Deleting Last element from list
    def delete(self):
        self.items.pop()
        
    #Displaying all the element present in list
    def display(self):
        if self.items==[]:
            print("Stack is empty",end='')
        for items in self.items:
            print(items,end="->")
        print("\n")

    
flag=True
s=Stack()
while flag:
    print("Enter 1 to push\n2 to Pop\n3 to Display\n4 to Exit")
    try:
        option=int(input())
    except:
        option=''
    if(option==1):
        if s.is_full():
            print("Stack is full")
        else:
            num=input("Enter the item to be inserted\n")
            s.insert(num)
    elif(option==2):
        if s.is_empty():
            print("Stack is empty")
        else:
            s.delete()
    elif(option==3):
        s.display()
    elif(option==4):
        flag=False
    else:
        print("Invalid Option")