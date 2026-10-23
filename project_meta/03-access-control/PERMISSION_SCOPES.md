# Permission Scopes

| Scope | Example | Notes |
|---|---|---|
| Organization | All approved records in ECA Connect | Broadest organization scope |
| Branch/campus | Abuja Central | Includes eligible child groups at that branch |
| Ministry/department | Music Ministry | Functional-team boundary |
| Group | Young Adults | General group boundary |
| Home cell | Airport Road Cell | Narrow pastoral/community boundary |
| Self | Member’s own profile/giving history | Subject-bound access |

## Evaluation example

A leader assigned `members.view` at `home_cell:airport-road` may view eligible members of that cell, but not donor identity, pastoral notes outside the cell, or the organization directory. A branch administrator with `attendance.manage` at `branch:abuja` may edit Abuja occurrences only.

Cross-scope reporting, inherited child scopes, temporary assignments, transfers, and records related to multiple scopes need formal production rules.
