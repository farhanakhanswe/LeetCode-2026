# Link: https://leetcode.com/problems/employees-earning-more-than-their-managers/?envType=problem-list-v2&envId=db-db1-sql-i

SELECT employees.name as "Employee"
FROM Employee as employees
LEFT JOIN Employee as managers
ON employees.managerId = managers.id  # because manager is also an employee
WHERE employees.salary > managers.salary;
