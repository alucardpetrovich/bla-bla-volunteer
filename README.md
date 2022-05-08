# bla-bla-volunteer


## ⚖️ Github Guidelines

In order to keep an overview, a few simple rules must be observed when working with Git.

1. "master" branch (productive)
   This branch is meant to publish the new release. Usually a build process listens to this branch, which then publishes the website.

This branch can only be published via a pull request.

2. "staging" branch (test)
   This branch is intended to present the new release to product owners, managers and others. Usually a build process listens to this branch, which publishes this staging under a subdomain.

This branch can only be published via pull request.

3. "dev" branch (development)
   This branch is intended to merge all features and hotfixes and to test them online. Usually a build process listens to this branch, which then publishes the test page under a subdomain.

Everyone is allowed to push into this branch.

4. Feature branches
   Each feature branch must be identified as such.

The prefix is "feature/“ followed by the “feature name” also "feature/[feature name]"

5. Hotfix branches
   Each hotfix branch must be identified as such.

The prefix is "hotfix/“ followed by the “hotfix name” also "hotfix/[hotfix name]"