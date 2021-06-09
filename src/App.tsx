import React from 'react';
import './styles/App.css';
import Background from "./Background";
import {Grid, Paper, Typography} from "@material-ui/core";
import GridEntry from "./GridEntry";

const myStyle = {
    padding: '1%'
} as React.CSSProperties;

const section = {
    height: '100%',
    padding: '1%',
} as React.CSSProperties;

function App() {
    return (
        <div className="App">
            <div className="Content">
                <Grid container spacing={3}>
                    <GridEntry className={"Title"}>
                        <Typography variant={"h2"}>
                            SWE 263P Final
                        </Typography>
                        <Typography variant={"h5"}>
                            Kenzo, Marilyn, Clare
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h3"}>
                            Introduction
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            We want to design a system that will help achieve financial independence with the
                            possibility to retire early (FI/RE). Our goal is to simplify and consolidate financial
                            planning in order to make it easy for people to get a head start on their future.
                        </Typography>
                    </GridEntry>
                    <GridEntry right>
                        <Typography variant={"h3"}>
                            The Idea
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            Create an extensible platform that focuses on managing budgets (i.e. short-and-medium term
                            spending) and their context of the user’s assets. Day to day, the FI/RE follower needs to
                            always be aware of their budgets and short term money needs, but longer term needs
                            information and resources for managing taxes, savings strategies, ETFs, Mutual Funds,
                            Property ownership, and any other asset in their portfolio.
                            Financial Independence is largely driven by two core activities: short and medium term
                            budgeting and personal financial planning. While these activities are distinct, they are
                            strongly related and support each other. Our plan is to establish a means for creating and
                            tracking budgets and tie those budgets into long term financial goals and progress to those
                            goals. We will do this by creating a web app for creating the budgets and integrate those
                            budgets with whatever spending accounts a user has (Credit Cards, Bank Accounts) to track
                            their usage. Then we will proliferate those budgets to all their devices, making it
                            ubiquitous and keeping them accountable to their personally set budgets. Then we will create
                            a section of that web app for planning out their financial independence goals, and their
                            current assets. We will generate reports for their investments and savings rates and give
                            information about the progress towards their goals.
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h3"}>
                            Research Question
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            1. Are most of the young people interested in financial independence? (this decides the
                            range of our user base)
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            2. Do people think they are good at making & following their financial plans?(Do they think
                            they need extra help?)
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            3. Do people already know how to reach their financial goals?
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            4. To what extent are young people fluent in financial systems?
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            5. What are the challenges they face with financial planning?
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            6. What tools do people need to help them with financial independence?
                        </Typography>
                    </GridEntry>
                    <GridEntry>
                        <Typography variant={"h2"}>
                            Methods
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h2"}>
                            Interview
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            We conducted online interviews with 9 separate interviewees. We followed the interview
                            protocol seen in the appendix to ensure we all asked similar questions, allowing us to get a
                            relatively unified understanding of the differences of user profiles. Each interviewer timed
                            themselves and we agreed that we should intend to finish different sections by the times
                            listed in the protocol. However, if time was short, interviewers could skip the credit/debt
                            section. During the interviews, we took notes on each participant’s answers to extract
                            themes and understandings.
                            After completing the interviews, we compiled all our interview notes on a Miro board to
                            begin our affinity diagram. We came up with about 250 notes. We had a group meeting over
                            Zoom to organize these notes into affinity groups. From there we summarized each affinity
                            group to encapsulate our interviewees’ feelings on and understandings of financial
                            independence.
                            These affinity groups were then compiled into groupings of generalized learnings and
                            understandings. We spent extra attention on comparing these learnings to our prior
                            assumptions.
                        </Typography>
                    </GridEntry>
                    <GridEntry>
                        <Typography variant={"h2"}>
                            Affinity Diagram
                        </Typography>
                        <img src={"../Notes.png"} width={"100%"}
                             alt={"A portion of our affinity diagram. Yellow sticky notes are our interview notes. Green sticky notes are the conclusions we made for each affinity group."}/>
                        <Typography variant={"body1"}>
                            A portion of our affinity diagram. Yellow sticky notes are our interview notes. Green sticky
                            notes are the conclusions we made for each affinity group.
                        </Typography>
                    </GridEntry>
                    <GridEntry>
                        <Typography variant={"h2"}>
                            Competitor analysis
                        </Typography>
                        <img style={myStyle} src={"../competitors/EmpowerRetirement.jpeg"} width={"45%"}
                             alt={"Empower Retirement Example Screen"}/>
                        <img style={myStyle} src={"../competitors/MINT.gif"} width={"55%"} alt={"Mint Example Screen"}/>
                        <img style={myStyle} src={"../competitors/PersonalCapital.png"} width={"37%"}
                             alt={"Personal Capital Example Screen"}/>
                        <img style={myStyle} src={"../competitors/Robinhood.PNG"} width={"13%"}
                             alt={"RobinHood Example Screen"}/>
                        <img style={myStyle} src={"../competitors/YNAB.jpg"} width={"40%"}
                             alt={"You Need A Budget Example Screen"}/>
                        <Typography variant={"body1"}>
                            Example Screen From Competitors.
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h2"}>
                            List of Competitors
                        </Typography>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Paper>Competitor</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper>Features</Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    Personal Capital
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    - Free version provides a sufficient amount of functionality for everyday use.
                                    <br/>- Keep track of every financial related activity in just one place.
                                    <br/>- Long term plan calculator for retirement goals looks fancy.
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    You Need a Budget
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    - The system focuses on removing the barriers of tracking spending and allows
                                    the user to stay on top of all their spending at all times.
                                    <br/>- The value proposition to the user is the ability to see how they are doing
                                    against their budgets in real time.
                                    <br/>- The system has integrations to many financial institutions like Credit Card
                                    companies and Banks.
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    Mint
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    - With plenty functions & totally free.
                                    <br/>- Keep track of every financial related activity in just one place.
                                    <br/>- Some users review that they actually gain credit scores since they were able
                                    to closely monitor their financial state.
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    RobinHood
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    - RobinHood offers no trading fees and a simple interface that allows users to
                                    start trading shortly after depositing funds from their bank account.
                                    <br/>- It lets users keep track of the companies they’re currently trading and also
                                    the companies that they’d like to keep an eye on.
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    Robinhood
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper style={section}>
                                    <br/>- It is easy to use without any prior financial knowledge and only basic
                                    computer knowledge.
                                    <br/>- It is a reputable company that many people trust to handle their money as it
                                    is the second largest retirement services company in the United States.
                                    <br/>- Some users review that they actually gain credit scores since they were able
                                    to closely monitor their financial state.
                                </Paper>
                            </Grid>
                        </Grid>
                        <Typography variant={"body1"}>
                            The table above shows a handful of usability issues we identified during our evaluations
                            along with their assigned priorities and proposed fixes.
                        </Typography>
                    </GridEntry>
                    <GridEntry right>
                        <Typography variant={"h2"}>
                            User Research
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            1. Most people did not want to sacrifice current comforts for long term goals, so they
                            weren’t too concerned about strict budgeting
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            2. Many people’s goals to reach financial independence is through being mentally conscious
                            of their spending and by making safe investments that they mostly can
                            set-and-forget </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            3. Many people weren’t as familiar with financial planning as they’d like and would like to
                            learn more about various financial topics
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h2"}>
                            Persona
                        </Typography>
                        <img style={myStyle} src={"../personas/Clarice.png"} width={"100%"} alt={"Clarice Persona"}/>
                        <img style={myStyle} src={"../personas/Jose.png"} width={"100%"} alt={"Jose Persona"}/>
                        <img style={myStyle} src={"../personas/Mizuha.png"} width={"100%"} alt={"Mizuha Persona"}/>
                        <Typography variant={"body1"}>
                            Our three personas detailing our user types.
                        </Typography>
                    </GridEntry>
                    <GridEntry>
                        <Typography variant={"h2"}>
                            Our Designs
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h2"}>
                            The Final Design
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            We created multiple iterations of our application design using Figma. We started with a low
                            fidelity wireframe and gradually made changes to increase the fidelity and fix usability
                            issues that we found during user evaluations.
                        </Typography>
                    </GridEntry>
                    <GridEntry right>
                        <Typography variant={"h2"}>
                            Low-Fidelity Wireframes
                        </Typography>
                        <img style={myStyle} src={"../LowFidWireframes.png"} width={"100%"} alt={"Wireframe screens"}/>
                        <Typography variant={"body1"}>
                            A portion of our wireframe screens.
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            Based on our user research, we used Figma to construct a low fidelity wireframe of our
                            application <a
                            href={"https://www.figma.com/proto/bkBcyLvWdyUgUEByI0oEQ3/Wireframe-and-Prototype?node-id=8%3A1630&scaling=scale-down&page-id=0%3A1"}>here.</a>
                            on the application’s key purpose and functionality rather than its aesthetic. Our wireframe
                            can be broken down into 4 main sections:
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            1. A dashboard to summarize all the user’s financial data
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            2. A budget section so the user can stay on top of their spending
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            3. A reports section so that users can understand their past performance
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            4. A resources section to provide the user with education materials in order to become more
                            financially literate </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h2"}>
                            User Evaluation
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            After wireframing, we needed to construct our high-fidelity prototype in order to more
                            accurately depict our final vision for our product. We asked users to perform a series of
                            tasks in order to identify any usability issues. The tasks were a mixture of broad
                            reflective tasks and specific goal-oriented tasks. The tasks the users performed are:
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            1. Can you explore the resource page and tell me what you think about it? (What can it do &
                            how do you think it can be improved) </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            2. Can you go to your dashboard and tell me what you think it can do/ how can it be
                            improved?
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            3. Can you go to set up your budget? Can you modify your budget?
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            4. Can you go link a bank account to your app account? Can you remove a linked account from
                            your application? </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            5. Can you open up your performance report? What else do you think you’d like to see on your
                            report?
                        </Typography>
                    </GridEntry>
                    <GridEntry right>
                        <Typography variant={"h2"}>
                            Evaluation Results
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            Based on these user evaluations, we compiled a list of usability issues. We then fixed these
                            issues and constructed our high-fidelity prototype. Our team members then compiled our own
                            list of usability issues based on the <a
                            href={"https://www.nngroup.com/articles/ten-usability-heuristics/"}> Nielsen Norman Group’s
                            10 Usability Heuristics for
                            User Interface Design</a> scale from 0-4 and addressed the most important issues for our
                            final design. Our final
                            interactive prototype can be found <a
                            href={"https://www.figma.com/proto/bkBcyLvWdyUgUEByI0oEQ3/Wireframe-%26-Prototype?node-id=238%3A467&scaling=scale-down&page-id=238%3A467"}>here.</a>
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <Typography variant={"h2"}>
                            Evaluation Results Table
                        </Typography>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper>Issue Description</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper>Priority</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper>Proposed Fixes</Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    User is unsure of how to remove a linked account
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>4</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    Add "edit" button that will display red minus signs to remove accounts
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    User did not know how to create a budget
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>4</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    When no budget exists, modify button instead says Add Budget
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    "Net worth" label is unclear as to how it's calculated
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>3</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    Make Net Worth its own category (Status bar?). Put question mark button next to net
                                    worth that displays pop up explaining how it's calculated
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    User is unsure of their progress towards FI from the dashboard
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>3</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    Include a status bar that shows net worth progress towards goal
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    Budget history does not give enough information to judge how well you budgeted that
                                    month
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>3</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    Make columns called "Your Budget", "What you spent", "Percentage saved" and include
                                    red-yellow-green indicator to show your performance that month
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    User has trouble filtering through all data in portfolio performance report
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>3</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    Add a filter feature to allow users to filter by time
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    User does not understand their overall performance through the report
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>3</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={section}>
                                    Add a summary at the top of the report that calculates their average rate of return
                                </Paper>
                            </Grid>
                        </Grid>
                        <Typography variant={"body1"}>
                            The table below shows a handful of usability issues we identified during our evaluations
                            along with their assigned priorities and proposed fixes.
                        </Typography>
                    </GridEntry>
                    <GridEntry>
                        <Typography variant={"h2"}>
                            Changes Made To Address Evaluation Results
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <img style={myStyle} src={"../prototype/Grab1.png"} width={"50%"}
                             alt={"Before change screen for Dashboard"}/>
                        <img style={myStyle} src={"../prototype/Grab2.png"} width={"50%"}
                             alt={"After change screen for Dashboard"}/>
                        <Typography variant={"body1"}>
                            (Left- Before) Dashboard did not summarize progress enough and definitions were unclear.
                            (Right- After) Dashboard summarizes user’s progress at the top and has buttons to clarify
                            definitions of potentially confusing phrases
                        </Typography>
                    </GridEntry>
                    <GridEntry right>
                        <img style={myStyle} src={"../prototype/Grab3.png"} width={"50%"}
                             alt={"Before change screen for Linked Account"}/>
                        <img style={myStyle} src={"../prototype/Grab4.png"} width={"50%"}
                             alt={"After change screen for Linked Accounts"}/>
                        <Typography variant={"body1"}>
                            (Left- Before) The Linked Accounts page was unclear how to edit and remove certain accounts.
                            (Right- After) The remove accounts feature was made more intuitive by making the buttons
                            red.
                        </Typography>
                    </GridEntry>
                    <GridEntry left>
                        <img style={myStyle} src={"../prototype/Grab5.png"} width={"50%"}
                             alt={"Before change screen for Portfolio Performance Report"}/>
                        <img style={myStyle} src={"../prototype/Grab6.png"} width={"50%"}
                             alt={"After change screen for Portfolio Performance Report"}/>
                        <Typography variant={"body1"}>
                            (Left- Before) It was hard for users to draw a conclusion on their overall performance and
                            to see specific lengths of time. (Right- After) The summary box at the top indicates how
                            well the user’s portfolio is doing and the filter feature allows the user to see specific
                            time intervals.
                        </Typography>
                    </GridEntry>
                    <GridEntry right>
                        <img style={myStyle} src={"../prototype/Grab7.png"} width={"50%"}
                             alt={"Before change screen for Budget History"}/>
                        <img style={myStyle} src={"../prototype/Grab8.png"} width={"50%"}
                             alt={"After change screen for Budget History"}/>
                        <Typography variant={"body1"}>
                            (Left- Before) It was hard for users to draw a conclusion on their overall performance based
                            on limited data. (Right- After) More columns were added to the table with more budget
                            statistics and the red-yellow-green colors were used to allow the user to evaluate their
                            budgeting at a quick glance.
                        </Typography>
                    </GridEntry>
                    <GridEntry>
                        <img style={myStyle} src={"../prototype/Grab9.png"} width={"33.3%"} alt={"Budget Home Screen"}/>
                        <img style={myStyle} src={"../prototype/Grab10.png"} width={"33.3%"}
                             alt={"Edit Budget Screen Step 1"}/>
                        <img style={myStyle} src={"../prototype/Grab11.png"} width={"33.3%"}
                             alt={"Edit Budget Screen Step 2"}/>
                        <img style={myStyle} src={"../prototype/Grab12.png"} width={"33.3%"}
                             alt={"Edit Budget Screen Step 3"}/>
                        <img style={myStyle} src={"../prototype/Grab13.png"} width={"33.3%"}
                             alt={"Edit Budget Screen Final Step"}/>
                        <Typography variant={"body1"}>
                            The budget feature was made more usable by allowing for more user control and freedom to
                            cancel modifications at any time and allowing users to go back and forth between
                            steps. </Typography>
                    </GridEntry>
                    <GridEntry>
                        <Typography variant={"h2"}>
                            Reflections On Process And Outcome
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            We are proud of the journey we’ve taken throughout this process and especially proud of our
                            final product. We started from a simple idea that we just wanted to help people achieve
                            financial independence. Looking back, every step and every iteration of our design was
                            essential to build our final design. The competitor analysis allowed us to get an idea of
                            what features were common in financial applications and how to set our design apart from the
                            rest. User research let us understand what our users actually need and allowed us to
                            prioritize those features. User evaluations allowed us to tackle usability issues that were
                            not noticeable to us as designers who knew the system well. Heuristic evaluations allowed us
                            to follow general principles in order for our design to be even more intuitive and user
                            friendly. We are able to see that user-centered design can be a long, but rewarding process
                            towards solving a problem. We are excited to take the skills and knowledge we’ve accumulated
                            to our careers in the future.
                        </Typography>
                    </GridEntry>
                    <GridEntry>
                        <Typography variant={"h2"}>
                            Acknowledgements
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            Thank you to our professor, Dr. Matthew Bietz, and our teaching assistants, Agnes Romhanyi
                            and Dennis Wang, for your guidance and thoughtful input during this project.
                        </Typography>
                        <Typography align={"left"} variant={"body1"}>
                            Thank you to our users/interviewees for your time and feedback; without you this project
                            would not have been possible.
                        </Typography>
                    </GridEntry>
                </Grid>
            </div>
            <div className="BackgroundDiv">
                <Background/>
            </div>
        </div>
    );
}

export default App;