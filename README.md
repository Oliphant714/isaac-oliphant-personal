# isaac-oliphant-personal — Git Usage Guide

This README provides common Git commands and useful flags for working with this repository.

Basic workflow

- **Add:** Stage changes for commit

  git add <file>        # stage a single file
  git add .             # stage all changed files

- **Commit:** Record staged changes

  git commit -m "message"    # commit staged changes

- **Push:** Upload commits to the remote

  git push origin <branch>    # push current branch
  git push --set-upstream origin <branch>   # set tracking and push

- **Pull:** Fetch + merge from remote

  git pull                  # fetch and merge current tracking branch
  git pull --rebase         # fetch and rebase (linear history)

Changing the origin URL

- View remotes

  git remote -v

- Change `origin` to an SSH URL

  git remote set-url origin git@github.com:ORGANIZATION/REPO.git

- Change `origin` to HTTPS URL

  git remote set-url origin https://github.com/USER/REPO.git

Stashing, reverting, resetting

- **Stash:** save work-in-progress without committing

  git stash save "message"   # create a stash
  git stash list               # list stashes
  git stash pop                # apply and drop the most recent stash

- **Revert:** create a new commit that undoes a previous commit

  git revert <commit>         # safe way to undo (creates new commit)

- **Reset:** move branch pointer (dangerous for shared branches)

  git reset --soft <commit>   # keep working tree, move HEAD and index
  git reset --mixed <commit>  # (default) reset index and HEAD
  git reset --hard <commit>   # reset index and working tree (destructive)

Logs, diffs, and show

- **Log:** inspect commit history

  git log                     # full history
  git log --oneline --graph --decorate --all   # compact visual history
  git log -p -2               # show patch for last 2 commits

- **Diff:** compare changes

  git diff                    # unstaged changes
  git diff --staged           # staged vs HEAD
  git diff <commit1> <commit2>

- **Show:** show a single object (commit, file at commit)

  git show <commit>           # show commit details and patch
  git show <commit>:path/to/file   # show file contents at commit

Helpful tips

- Use `git status` often to understand the current state.
- Prefer `git pull --rebase` for feature branches to keep linear history.
- Use `git revert` for undoing published commits instead of `git reset --hard`.

Adding code from node-bulletin-board sample

To clone the sample into a folder named for this repository and set your remote, run:

```powershell
git clone https://github.com/dockersamples/node-bulletin-board isaac-oliphant-personal
cd isaac-oliphant-personal
git remote set-url origin git@github.com:byui-itm350-a2s26/isaac-oliphant-personal
git checkout -b init
git add .
git commit -m "My first push"
git push --set-upstream origin init
```

If you plan to use SSH, add the public key printed by the automation or from `~/.ssh/id_ed25519_isaac_oliphant.pub` to your GitHub account.
