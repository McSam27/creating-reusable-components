# Creating Reusable Components - PluralSight
## Why reusable components?
1. Consistency throughout a company's software products.
2. Efficiency increases when we have components to pull from to prototype or create new pages.
3. Collaboration. Component library becomes 'open-source'-esque. 
4. Cross-platform
5. Enforced architecture
6. Future-friendly
7. Self-contained
8. Scalable apps, with richer building blocks.
9. Faster development.
10. Fewer bugs

"A web application is merely built with components."

## Why NOT use native web components?
* modern libraries, accelerate much faster and allow for more features to be used. They are innovative.
* browser support is very spotty
etc: template tag, import, shadowDOM
* Web components don't enable anything new
* A strong foundation of JS libraries exist.

Most popular frameworks:
1. React
    + Lightweight, component library
        + can be 'sprinkled' on top of legacy apps... (FB is PHP shop that is implementing React components 1-by-1)
        + only 43K, Inferno is 9K, and Preact is 3K
    + One of the largest component library GitHub Community
        + over 20,000 components at Facebook
        + also used by Walmart, Netflix, AirBnb, Reddit
    + Stability
        + with future iterations of React will most likely be auto-updated if there is a drastic change
    + most attractive platform component library today
    - Require React
    - Potential version conflicts
    - multiple simultaneous versions impractical
2. Angular
3. Ember.js
4. Vue.js

## React Reusable Component Decisions
#### Core Decisions
* core technology
* audience
* rigid or flexible
* link, wrap, or fork

#### Dev Environment
* boilerplate, doc lib, or custom
* library or standalone
* monorepo or separate

#### Documentation
* off-the-shelf or custom
* generating documentation
* search
* syntax highlighting
* interactive playground
* hosting
* automated deployment

#### Design
* wrap HTML primitives?
* folder structure
* declare propTypes?
* apply custom props?
* defaults?
* accessibility
* server rendering
* config object vs primitives
* atoms
* molecules
* oranisms

#### Styling
* CSS technoology
* inline vs external
* namespace
* naming scheme
* offer unstyled components
* theming

#### Testing
* Framework
* Assertions
* Helpers
* unit
* interaction
* structural
* style
* when to run
* where to place tests
* continuous integration

#### Deployment
* dependency declarations
* hosting
* versioning
* declaring package files
* output formats
* pre-publish testing
* build process

Over 50 decisions when thinking of creating component library.

## Four Core Decisions
#### 1. Audience
* projects
* entire team
* entire business
* public
The needs for it grow when you think of multiple use cases.

#### 2. Rigid or flexible components?
* Users will want to make the components flexible with different use cases
* allowing users to create colors, padding, size, or fonts
* different layouts
* data display
* logic such as functions or overriding default behavior

Rigid has few props for customizing it's looks or behavior.
+ simpler to create, because they have fewer use cases
+ easier to understand, their use is specific and clear
+ less work to maintain
more opinion = more consistency, less fatigue
+ easy to add flexibililty, but it's hard to remove
*** Starting with a rigid component and slowly adding flexibile features will simplify the development process

Flexible Components:
+ reusable in more contexts

*** Could always create two different similar components

## Tragedy of the Commons:
* individuals behave contrary to the common good
* individuals act and view in their own self-interest
* complexity must be justified if asked to add 'one more' feature toggle
* "Props are easy to add, but hard to remove"
* excessive usability is hard to test
* Consistency and flexibilty are in a tug-of-war.
* Features and simplicity are also in a tug-of-war.
*** Start components as rigid. Add flexibilty as required.

1. Link, wrap, or fork third parties?
Link => provide a link to it in documents
+ Don't have to create documentation (but you must rely on third party)
+ You must be aware of changes, and watch the repository.
+ If new features don't break it, you can use them for free.
+ Customization, have zero ability.
+ Styling,  provide separate styles
+ Cohesion, because you're pulling from an external source, rather than internal.
+ Ease, very easy to implemeent.  

Wrapping => pretends we built it, to add more features or hide features
+ You hide the name / back-end code.
+ You can send custom props to component.
+ You can hard code styles.
+ Provide documentation
+ Changes and new features, can be chosen when to upgrade.
+ Customization, you get some customization.
+ Styling
+ Cohesion
+ Commitment is low.
+ Ease, because you can have customization

Forking => you own the entire code, and have full customizable power. but you have to maintain it.
+ Documentation, and integrate into library.
+ You have full control over all changes.
+ New features, are up to you when to merge chanages.
+ Full customization
+ You can customize styling.
+ Cohesion, everything 'fits' together.
+ Commitment, has a high commitment.
+ Much more work.

Link, Wrap or Fork?
* Is it good enough as is to simply link?
* Does this fit our model?
* Are the styles overridable?
* Is the project actively maintained?
* Will wrapping give us enough power?
* Are we committed to it?


#### 4. When should I add components to my library?
"A reusable component should be tried out in three different applications, before it will sufficiently general to accept into a reuse library... To build something truly reusable, you must convince three different audiences to use it throroughly."

*** It is a good idea to prove your idea with 3 different audiences.
It is not a reusable component, unless it is placed in three different spots before placing it in a component library.

*** TIP: /reusable directory to keep a central place to store app-specific reuseable components

## Course Assumptions:
* assume you know React basics
* paste and explain code

## Development Environment
Decisions:
#### 1. Library or standalone?
* Material-UI - offer React components that follow Google Material Design
* Blueprint - modern components
* react-dates - react date-picker from AirBnb
* react-dnd - drag and drop support
* react-griddle

Comparison:

    Library         
    + Consistent look and feel
    + Easier to add a new component, because there is already a repo 
    + simpler organization (implements D.R.Y.)
    + Quickly add components
    + Simpler dependency management
    + Automatic discovery
    + Less marketing overhead
    + Easier integration testing
    + People can still use only what they want to use

    Standalone
    + Easier to build
    + Easier to adopt, don't have to review all library
    + Low commitment, easier to replace a single component
    + Mix and match components together
    + Flexible
    + Less version churn
    + You can manage multiple packages from one single repo.
        => Lerna - a tool for managing JavaScript projecs with multiple packages (can host multiple npm modules within one repo)


In this course, we will be building a library and hosting on one single GitHub repo.

#### 2. Should we use a boilerplate, doc library, or build your own?

    A. Boilerplate - over +100 boilerplates (starter kits)

        Reccomended boilerplates: 
        1. create-react-app 
            Pros:
            + most popular
            + supported by Facebook
            + bundles popular tech
            + well tested
            + easily upgradable
            + eject for full configurability

            Cons:
            - must eject for full configurability
            - Eject = manual updates
            - Strong opinions:
                a. Babel vs TypeScript
                b. Webpack vs Rollup vs Browserify
                c. Jest over Mocha, Jasmine, etc.

        2. NWB - node, webpack and babel into one environment package
            Pros:
            + component library focused
            + testing with mocha and karma
            + transpiles to ES5
            + can lease ES imports for tree shaking
            + optional UMD build

            Cons:
            - Oriented toward a single component (rather than a library of components)
            - Strong opinions:
                a. Assumes Babel > TypeScript
                b. Assumes Webpack > Rollup, Browserify
                c. Assumes Mocha + Karma > Jest

## In General:
* Complete Flexibilty on doc approach
* Many more options
* No popular component libs use doc tool

#### B. Documentation Library / Styleguides
#### Documentation is basically your application

    1. React Storybook
        a. Allows you to see different prop-styled components
    2. React Styleguide Generator
        a. List of all componemts on left, live preview and small code excerpt on the right.
    3. React Styleguidist
        a. Allows ability to see a small snippet of code. However, it doesn't contain all of the needed code, such as the import statement.
        b. Uses Ava test framework
    4. Atellier (room where an artist works)
        a. Focuses on more interactive style of documentation
        b. Intelligently reads props for live preview
    5. Bluekit
        a. Favorite interactive playground.
        b. Uses documentation to show code snippets
        c. Shows full usage example 
    6. Cosmos
        a. interactive documentation, with a hot-rendering editable code snippet
        b. tool for implementation
    
    + Clear documentation approach
    + Searchable component list
    + Working examples
    + Prop documentation
    + Code snippet display

#### C. Build your own custom development environment
    + Complete control over all aspects of code creation
    + Pick you favorite tooling
    + Complete understanding
    + Quickly change as needed
    - More up front work
    - Existing boilerplates work great
    - Will jumpstart 90% of your environment

    *** Webpack is most popular
            Rollup has smaller bundled, and faster parsing.
    Use webpack for applications and rollup for libraries

We will be using create-react-app
Contains:
    * Webpack
    * Babel
    * ESLint
    * Jest

##### Commands
    Install node & git on local machine
    Create public GitHub repo, and set up with local directory
    create-react-app bootstraps our folder structure, dependencies, layout and package manager

    create-react-app included eject cmd, which allows us to customize environment 
    npm run eject
        => you can see Babel, ESLint, Jest config files
        => shows hidden files such as ^^^.config files, polyfills.js, script builds

    remove logo.svg, App.css and references in App.js

## Module: Documentation
Goal: Your docs are your dev environment.

#### Documentation Goals:
// This will be auto generated with react-docgen
- Component Description
- Prop documentation
    - Type
    - Description
    - Default value
    - Required

// end auto generated
- Working examples with code

Ensure everyone has a common vision.
Should be encorporated with the company styleguide with instructions about brand identity, voice and tone, design and language.

Automation of Docs:
+ Code and docs are always in sync
+ More readable code
+ Enforce consistency

##### Documentation Tools:
* GitHub Readme / Pages
* React Storybook
* React Styleguide
* React Styleguidist
* Atellier
* Bluekit
* Cosmos

***This course will be custom created documentation.

##### What will we be using
npm Packages for Documentation
* react-docgen => generate react component metadata (outputs into JSON file)
* chokidar => watch files
* highlight.js => syntax highlighted code examples
* npm-run-all => run parallel tasks


DevTips:
* When creating a new directory, make sure to restart the library.

##### Syntax Highlighting
1. Highlight.js
    * Shows proper syntax highlighting and allows people to copy and paste.
2. Codemirror
    * Mini editor that will reflect changes in the view.
    * react-toolbox uses this

##### Potential Doc Enhancements
1. Search bar on top of the navigation list
2. Hide the 'internals' of the code
3. Group Components together
4. Live prop toggling, usch as BlueKit and Atallia
5. Markdown support
6. Live code editing such as CodeMirror. Very impressive and good for feedback. Such as react tool-box. Can link to JSBin, JSFiddle, codesandbox.io.

* react-toolbox has one of the nicest set of component libraries