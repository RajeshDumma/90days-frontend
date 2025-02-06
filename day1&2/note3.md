# Day 3: Basic HTML5 & Bootstrap Assignments


### What We'll Learn Today:
1. HTML5 semantic tags (simple basic structure)
2. Box model (spacing and borders)
3. Bootstrap basics (easy layouts)

### Assignment 1: College Department Page
**Task:** Create your department's webpage using semantic HTML

**Files You Need:**

department-page/
├── index.html
├── style.css
└── images/
    ├── college-logo.jpg
    ├── dept-photo.jpg
    └── hod-photo.jpg


**Your Tasks:**
1. Create Header:
   - College name
   - Department name
   - Simple navigation menu

2. Add Main Content:
   - About department
   - Course details
   - Faculty list

3. Add Sidebar:
   - Important notices
   - Quick links

Example Structure:

<!DOCTYPE html>
<html>
<head>
    <title>CSE Department</title>
</head>
<body>
    <header>
        <!-- Add header content here -->
    </header>

    <main>
        <!-- Add main content here -->
    </main>

    <aside>
        <!-- Add sidebar content here -->
    </aside>

    <footer>
        <!-- Add footer content here -->
    </footer>
</body>
</html>
```

### Assignment 2: Box Model Practice

**Task 1: Faculty Profile Cards**
Create simple faculty profile cards with:
- Photo
- Name
- Designation
- Contact info

What to Practice:
1. Add margins between cards (10px)
2. Add padding inside cards (15px)
3. Add simple border
4. Add background color

Example Card Structure:

.faculty-card {
    /* Add your styles here */
    width: 200px;
    margin: ?
    padding: ?
    border: ?
}
```

**Task 2: Notice Board**
Create a notice board with:
- Title
- List of notices
- Date for each notice

Practice:
- Spacing between notices
- Borders around notices
- Different background colors

### Assignment 3: Bootstrap Basics

**Task 1: Install Bootstrap**
1. Go to Bootstrap website
2. Copy CSS link:

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

3. Copy JS link (at bottom of body):

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>


**Task 2: Create Simple Class Timetable**
Use Bootstrap grid to create a timetable:
- Different columns for each day
- Different rows for each period
- Highlight lunch break

Structure Example:

<div class="container">
    <div class="row">
        <!-- Add days here -->
        <div class="col">Monday</div>
        <div class="col">Tuesday</div>
        <!-- More days... -->
    </div>
    <!-- Add periods... -->
</div>


### Final Project: Department Events Page

**Task:** Create a page for department events

**Requirements:**

1. Header:
   - Department name
   - Simple menu
   - College logo

2. Events Section:
   - Technical Events
   - Cultural Events
   - Sports Events

3. Registration Form:
   - Student name
   - Class/Branch
   - Event selection
   - Submit button

Use this layout:

+------------------+
|     Header       |
+------------------+
|                  |
|  Events Photos   |
|                  |
+------------------+
| Technical | Games|
| Events    |Events|
+------------------+
|  Registration    |
|     Form        |
+------------------+
|     Footer      |
+------------------+


### How to Submit ✉️

1. Create a pdf file with:
   - All HTML files


2. Name your files properly:
   - index.html
   - style.css or <Style></Style>
   - No spaces in names!

### Marking Scheme 📝

We'll check:
1. Clean code structure (10 marks)
2. Proper use of semantic tags (10 marks)
3. Box model implementation (10 marks)
4. Bootstrap grid usage (10 marks)
5. Overall layout (10 marks)

### Help Available 🆘

Stuck somewhere?
1. Ask in WhatsApp group
2. See Bootstrap documentation
4. Contact me

### Sample Images to Use:

1. For College Logo:

college-logo.jpg try to use 

<img src="https://fakeimg.pl/250x100/">



2. For Events:

<img src="https://fakeimg.pl/250x100/"> - Technical Symposium
<img src="https://fakeimg.pl/350x200/ff0000/000"> - Cultural Night
<img src="https://fakeimg.pl/350x200/?text=World&font=lobster">
 - Sports Meet


3. For Department Photos:

lab-photo.jpg
classroom-photo.jpg


### Tips for Success 💡

1. Start Simple:
   - First create structure
   - Then add content
   - Finally add styling

2. Common Mistakes to Avoid:
   - Don't forget to close tags
   - Check image paths
   - Keep proper indentation

3. Testing:
   - Test in different browsers
   - Verify all links work

Remember:
- Take small steps
- Ask doubts immediately
- Help your friends
- Practice regularly

Good luck! You can do it! 🚀