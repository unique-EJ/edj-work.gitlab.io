# edj-work.gitlab.io

A static website at the root of the GitLab Pages (sub-) domain given to the  
"common group to manage collaborating on my projects" group this project is under, on GitLab.

Created through the [Astro](https://astro.build) content-before-complexity build framework.

I like the layout of Unix-like Linux distributions and the Git system  
of snapshots over time to save the state of project files, referred to  
by content checksum hash values. I am especially interested by the tool  
feature of Git sub- modules, equivalent to mounting points in file systems because  
a Git system of versioned file storage (repository) may be accessed in another  
Git repository as a separate versioned "filesystem" with a ".gitmodules" file,  
mapping where the sub- directory is from, like a file system (configuration) tab.

So I have plans to use this in my projects.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation, https://docs.gitlab.com/ce/user/project/pages/.

## Open source license

The Source Code Form (of this project work), except files that refer to another license by declaration in file name or file content, is subject to the terms of the Mozilla Public License, version 2.0, or subsequent versions.

The MPL-2.0 licensed Covered Software in the Source Code Form is "Incompatible With Secondary Licenses"  
(to NOT distribute this Covered Software under the terms of such licenses of a Larger Work),  
as defined by the Mozilla Public License, version 2.0.

---

## GitLab CI

This project's static Pages are built by [GitLab CI](https://about.gitlab.com/gitlab-ci/), following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml)

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. Install dependencies: `npm install`
1. Preview your project while making changes: `npm run start`
1. Add content
1. To simulate a static build, run `npm run build`. This is not required.
1. Commit & push your changes. GitLab will tigger a static build as instructed by the `.gitlab-ci.yml`

Read more at Astro's [documentation](https://docs.astro.build/en/getting-started/).
