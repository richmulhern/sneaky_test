# sneaky_test
Interview Code Challenge Solution

### Problem

Assume there is a room of 16 students in a classroom in a grid from [0,0] to [3,3]. The students are attempting to pass notes without getting caught. Some students are sneakier than others and each student is given a percentage value of how sneaky they are. Return the path that is most likely to succeed and the final percentage.

### Rules
- You start with 100% chance of getting caught.
- Notes can only be passed in a positive direction on the grid. A note starting at [1,2] can only go to a student whose x position is greater than 1 and y position is greater than 2.
- Notes need to be passed from student to student along the way.
- Notes cannot be passed diagonally.
- Notes passed on the x axis remove at most 10 from the current chance of getting caught (e.g. 0,0 to 1,0 would go from 100 to 90 then 1,0 to 2,0 would be 80)
- Notes passed on the y axis remove at most 50% of the current chance of getting caught from the value (e.g. 0,0 to 0,1 would change your chance of getting caught from 100 to 50, but from 0,1 to 0,2 it would go from 50 to 25)
- The sneakiness of the current student with the note is a percentage that applies to the points that will be lost with the move. If a student has a sneaky rating of 50 and moves horizontally the chance of getting caught only goes down 5%. If the same student moves across the 7 access they now only 50% of the 50% to be reduced (25%).
- You can add parameters to the passNote function

### Example

Assume you have a function called passNote that takes at least 4 parameters:

`passNote(x,y,i,j);`

x = starting point on the x axis of the note
y = starting point on the y axis of the note
i = end point on the x axis for the note
j = end point on the y axis from the note

To pass a note from student [0, 1] to student [2, 3] it would look like

`passNote(0,1,2,3);`
