export const data = [
  {
    "Question": "You are a construction project manager and have been recently hired in a well known company as the manager of a highly crucial project. The project is expected to be completed in 2 years. During the project initiation phase you realize that some regulatory and environmental requirements have not been considered in the contract. Failure to meet the mentioned requirements will negatively affect your company’s reputation, but meeting them will require more time and cost, which will lead to budget and time overruns. In that case, there’s also a chance that the client decides to cancel the project. What would you do in that situation?",
    "A": "Your first and immediate action is to disclose your discovery to the project stakeholders and solicit their viewpoints.",
    "B": "This requires a scope change notification that should be written immediately.",
    "C": "Since this is only a probability it does not need an immediate action. Just try to gather more information as the project goes ahead and decide later on.",
    "D": "As a seasoned construction project manager, contact the regulatory body to find out some workarounds for your project.",
    "Correct": "A",
    "Explanation": "PMI’s Code of Ethics requires all project managers to comply with all laws and regulations. Failure to immediately and actively disclose that a regulatory requirement has not been addressed puts the company and the project manager in the position of breaking the law.",
  },
  {
    "Question": "Your sponsor will be leaving your project soon due to other obligations. She informs you that her role will be filled with two new people. She assures you that this should not affect the communication complexity of the team since you are only going from eleven to twelve members. Is your sponsor correct?",
    "A": "Yes, because the sponsor is always right.",
    "B": "Yes, adding one additional person adds only one more communication channel for an eleven-member team.",
    "C": "No, Agile teams should be as small as possible.",
    "D": "No, adding one more person adds more than one communication channel for an eleven-member team.",
    "Correct": "D",
    "Explanation": "Adding one additional person to an eleven-member team adds 11 additional communication channels, which can increase complexity. Eleven members have 55 communication channels, and 12 members have 66 channels: N ∗ (N − 1) / 2 = # of communication channels for the team where N = the number of members. So there are 66 − 55 = 11 channels added."
  },
  {
    "Question": "You are managing a software development project which should be completed in 18 months according to the project contract and schedule. Your customer has recently faced regulatory changes that require your project to be finished 2 months earlier and he asks you to do so. How will you approach this situation?",
    "A": "Inform the customer of the impacts of his requirement to project constraints and, after getting the required approvals, crash the project.",
    "B": "Accept the customer’s request and cut parts of the project scope to meet the new deadline.",
    "C": "Stick to your original schedule and tell the customer that once the contract is signed the project duration won’t change under any circumstances.",
    "D": "Cut the duration of all project activities across the board to meet the requirement.",
    "Correct": "A",
    "Explanation": "Informing the customer of the impacts to project scope and other constraints, then crashing the cost and schedule is the best approach. Arbitrarily trimming estimates or scope without directly advising your customer is dishonest, while simply refusing to make a change is unprofessional."
  },
  {
    "Question": "According to the contract, your customer has assigned one of his staff to your project office to attend the meetings and contribute to the decision making. However, this person is too confrontational and his behavior to your project team members is intimidating. What should be your action in this situation?",
    "A": "Ask the customer to replace the person.",
    "B": "You unilaterally decide to isolate the person and don’t let him in the project meetings.",
    "C": "Since the person is assigned by your client you don’t have any authority over him, so don’t do anything.",
    "D": "Confront the person about his behavior and its impact on the project. Also, inform the customer about the issue.",
    "Correct": "D",
    "Explanation": "The best approach to deal with the problems is to confront them. In this situation you should respectfully confront the resource about this behavior, and notify the customer about the situation. Failing to confront the resource or intentionally excluding a required resource from a project is unprofessional, and could negatively impact the project."
  },
  {
    "Question": "The majority of the project management software applications use the ——— method to build the project schedule network diagram.",
    "A": "Leads and Lags",
    "B": "Critical Diagramming",
    "C": "Precedence Diagramming",
    "D": "Activity-On-Arrows Diagramming",
    "Correct": "C",
    "Explanation": "PDM, also called Activity-On-Node (AON), is the method used by most project management and project planning software packages."
  },
  {
    "Question": "You have just been assigned to a new change-driven project. The team has never worked together before, but they are experienced with agile techniques. Which TWO of the following techniques would be most useful for promoting your team’s performance?",
    "A": "Creation of a detailed schedule with regular milestones.",
    "B": "Allow the team to collaboratively develop a plan to execute the project.",
    "C": "Expose and eliminate communication bottlenecks.",
    "D": "Creation of a change control procedure so that only needed changes are addressed and implemented.",
    "Correct": "B, C",
    "Explanation": "The key to this question is that it is a change-driven (i.e., Agile) project and the team has experience with this type. A servant leader style is most effective for this environment. Empowering a team to self-organize and work collaboratively and eliminating bottlenecks are characteristics of such a leadership style. A detailed schedule with milestones will not benefit the team’s performance, particularly if the work will be accomplished via a product backlog. Similarly, a change control procedure is generally not needed for change-driven projects since change is built into the system between iterations or sprints.",
  },
  {
    "Question": "To formally authorize the project, which of the following documents is necessary?",
    "A": "Project Statement of Work (SOW)",
    "B": "Project Charter",
    "C": "Business Case",
    "D": "Project Contract",
    "Correct": "B",
    "Explanation": "The project charter is the document that officially authorizes a project and gives the project manager the required authority to assign resources to the project."
  },
  {
    "Question": "The photo transfer project will be starting in a few weeks, and it is up to you to decide which project methodology the team will use. You have some concerns about the project because the customer will not always be available, and the team has mixed experience in agile methods. Also, even though the sponsor is quite supportive in allowing you to choose whichever approach is best, he has given you a warning. He suggests that you be prepared since this particular customer is known to be demanding and changes their mind frequently based on the latest market intelligence they’ve heard. After reviewing the situation, which method would be most appropriate?",
    "A": "Scrum",
    "B": "Predictive",
    "C": "Hybrid",
    "D": "Waterfall",
    "Correct": "C",
    "Explanation": "Predictive and Waterfall are similar since waterfall is a type of predictive approach. The fact that there will be frequent change implies that this type of approach may not be suitable. Scrum is also risky since the customer will not always be available to the team and the team has mixed experience. A hybrid approach is the best option. In a hybrid lifecycle, those well-known and fixed elements can follow a predictive life cycle, and those that are still evolving can be done with an adaptive approach. This may involve running two portions of the project in parallel or doing the change aspects first until the requirements are better known (i.e., the adaptive portion precedes the predictive portion). A hybrid approach is also ideal for training team members on Agile methods."
  },
  {
    "Question": "You are a project manager and you are about to perform the risk management processes. Which one of the following documents evolves throughout the risk management processes?",
    "A": "Risk Mitigation Plan",
    "B": "Contingency Plan",
    "C": "Risk Profile",
    "D": "Risk Register",
    "Correct": "D",
    "Explanation": "The risk register is the document that evolves throughout the risk management processes."
  },
  {
    "Question": "As a project manager you are performing scope management processes. What is the function of the WBS Dictionary?",
    "A": "Used as a glossary to define the acronyms used in the project scope statement",
    "B": "It is used for the planning of the project resources",
    "C": "Used as a glossary to define the acronyms used in the project WBS",
    "D": "Describes the details of each component in the project WBS",
    "Correct": "D",
    "Explanation": "The WBS Dictionary is a detailed description of work packages and their attributes including any technical documentation for each WBS element."
  },
  {
    "Question": "As the manager of a large project, you are performing the Control Procurements process. Which one of the following activities would you likely not be involved in?",
    "A": "Audits",
    "B": "Claims Administration",
    "C": "Inspection",
    "D": "Negotiation",
    "Correct": "D",
    "Explanation": "Negotiation is used while performing the Conduct Procurements process. The other answer choices are performed during the Control Procurements process."
  },
  {
    "Question": "Some projects have a comprehensive procurement phase that covers buying a huge number of items and for each item several suppliers are contacted to receive their bids. As a project manager in such projects, you need to make sure that every supplier has a clear understanding of the requirements of the project. Which one of the following techniques could be used for this purpose?",
    "A": "Communication Matrix",
    "B": "Formal Presentation",
    "C": "One-on-One discussion",
    "D": "Bidder Conferences",
    "Correct": "D",
    "Explanation": "Bidder Conferences (also called vendor conferences, contractor conferences, or pre-bid conferences) are meetings between buyers and all prospective sellers prior to the submittal of bids or proposals. They are used to ensure that all sellers have a clear and common understanding of the procurement and that no bidders receive preferential treatment. Responses to questions are incorporated as procurement document amendments. To be fair, buyers must ensure that all sellers hear every question from individual sellers and every answer from the buyer."
  },
  {
    "Question": "You have just been given the responsibility to staff and oversee a new Scrum project. There are very limited resources, and you don’t have the budget to hire new people. One individual has been pre-assigned to the project, and she has asked to be the project’s scrum master. Although she has participated in Scrum projects previously, she has never had this role. What would be your best option in this situation?",
    "A": "Tell the team member that you need someone who is experienced in the role.",
    "B": "Ask the functional manager if they have anyone available who can serve as the scrum master.",
    "C": "Allow the team member the role but ask that she enroll in scrum master training right away.",
    "D": "Assign the team member a coach who has experience in being a scrum master.",
    "Correct": "D",
    "Explanation": "Without the budget to hire and with resources already being limited, it is not feasible to find someone who is already experienced. Scrum master training is a possibility but seeing as the team member has experience on Scrum projects, she is likely already familiar with what a scrum master role entails. Assigning her an agile coach who can work with her throughout the project is the most feasible option."
  },
  {
    "Question": "As the project manager you are reviewing the earned value analysis report performed by your team. The SPI is 0.87. What does this figure mean to you?",
    "A": "Your project is running according to the budget.",
    "B": "The project is getting 87 cents out of each dollar spent.",
    "C": "You are ahead of schedule.",
    "D": "The progress of your project is only 87% of what it is planned, so you are behind the schedule.",
    "Correct": "D",
    "Explanation": "The Schedule Performance Index (SPI) is a measure of the project performance in terms of the time schedule. SPI < 1 shows that the project is behind schedule."
  },
  {
    "Question": "As the project manager you wish to use a document that shows the work assigned to each project team member. What’s the title of the document that you will use?",
    "A": "Responsibility Assignment Matrix (RAM)",
    "B": "Project Resources Matrix (PRM)",
    "C": "Resource Planning Chart (RPC)",
    "D": "Project Schedule",
    "Correct": "A",
    "Explanation": "A Responsibility Assignment Matrix (RAM) illustrates association between work packages/activities and team members. It makes it easy for team members to view all the project activities for which a particular person is assigned, and the level of their responsibility."
  },
  {
    "Question": "You are managing a project in a highly cost sensitive company. Therefore, you need to reduce the costs to the extent possible. Which one of the following categories of cost would you consider as the first option for cost reduction?",
    "A": "Variable and fixed costs",
    "B": "Indirect and variable costs",
    "C": "Indirect and direct costs",
    "D": "Direct and variable costs",
    "Correct": "D",
    "Explanation": "Direct costs belong to project resources which can be scaled down or reduced. Variable costs depend on the amount of work performed by resources. Therefore, there is a higher opportunity to reduce it by reducing the scope and amount of work required."
  },
  {
    "Question": "You are leading an Agile project for a new IT initiative in the company that will get a lot of visibility. You have been disappointed that the quality of the product delivered for the last several sprints has been poor. What is the best option that the team should take?",
    "A": "Ensure transparency of the work progress by displaying the KanBan board in the team war room.",
    "B": "Hold retrospectives more frequently",
    "C": "Ensure the team is using test-driven development",
    "D": "Remind the team about the importance of an agile mindset.",
    "Correct": "C",
    "Explanation": "Test-driven development is a quality practice that drives defects down. Since this is a quality issue, this would be the best option. Transparency, more frequent retrospectives, and the agile mindset are important agile practices and attributes, but they will not help the quality issue."
  },
  {
    "Question": "As a project manager you are involved in purchasing various items for the project. However, you suddenly receive an official letter from your client ordering the immediate termination of the project. What will be your best course of action?",
    "A": "Refer to Project Closure Guidelines in Organizational Process Assets",
    "B": "Perform Inspections & Audits",
    "C": "Perform Procurement Audits",
    "D": "Release the Project Team",
    "Correct": "A",
    "Explanation": "Since this is a case of project closure before its completion, as a project manager the BEST thing to do for you is to make sure the steps to close a project are followed. Project Closure Guidelines in Organizational Process Assets are the best source of information in such a situation."
  },
  {
    "Question": "Frank has been meeting with stakeholders to flesh out and understand the requirements for his new project. Which activity would he likely not be engaged in?",
    "A": "Inspection",
    "B": "Facilitation",
    "C": "Questionnaires & Surveys",
    "D": "Prototypes",
    "Correct": "A",
    "Explanation": "An inspection is a tool and technique for the Validate Scope process, while the other options are all the tools used for the Collect Requirements process."
  },
  {
    "Question": "In an industrial project the equipment installation can be started 15 days after the equipment foundation is completed. What type of dependency is this?",
    "A": "Start-to-finish with a 15-day lead",
    "B": "Finish-to-start with a 15-day lag",
    "C": "Finish-to-start with a 15-day lead",
    "D": "Finish-to-finish with a 15-day lag",
    "Correct": "B",
    "Explanation": "The dependency between the two activities is a Finish-to-Start (FS) type because the second activity can start only after the completion of the first one. There is also a time lag of 15 days before the second activity can start."
  },
  {
    "Question": "According to Tuckman, which of the following is not one of the stages of team development?",
    "A": "Delegating",
    "B": "Performing",
    "C": "Forming",
    "D": "Norming",
    "Correct": "A",
    "Explanation": "According to Tuckman, the stages of team development are Forming, Storming, Norming, Performing, and Adjourning."
  },
  {
    "Question": "Ashley, the agile team’s product owner, recently hired Bill as a software developer for their team. Unfortunately, after Bill was hired, another product owner was able to reserve 50% of Bill’s time for their project. What is one of the key problems with not having Bill dedicated to Ashley’s team?",
    "A": "Bill may not have the skills for the other team since he was not hired with their project in mind.",
    "B": "Bill would become a generalist, or T-person, rather than a specialist.",
    "C": "Bill may become dissatisfied with having too much work to do.",
    "D": "The team's productivity would be affected because of Bill's task switching.",
    "Correct": "D",
    "Explanation": "The key problem with working 25–50% on a project is that multitasking from one project to another affects the whole team’s productivity. Bill likely has the skills needed, or the other product owner wouldn’t have asked for him. Generalists and T-shaped people are sought after for Agile teams, so this would not be a problem. We don’t know enough about Bill’s workload to know if he would be dissatisfied."
  },
  {
    "Question": "Which TWO activities might a project manager be doing while acquiring resources for their project?",
    "A": "Comparing labor rates to what is allocated in the project budget.",
    "B": "Creating the staffing management plan.",
    "C": "Planning communication protocols for virtual team members.",
    "D": "Sending team members to the training needed for the project.",
    "Correct": "A, C",
    "Explanation": "Part of acquiring resources involves verifying if the costs of the selected team members will fit within the project budget. If virtual team members are an option, then special communication protocols will need to be put in place to minimize misunderstanding and conflict. Creating the staffing management plan would take place during the plan resource management process, and sending team members to training would occur during the develop team process."
  },
  {
    "Question": "Your website development project is newly underway. The team appears to be in the “storming” stage, with several members insisting that the process occurs in a certain way and others unwilling to participate after their views were overruled. You recognize that cooperation and collaboration are imperative for the team to achieve the sponsor’s goal of a working prototype within the next few weeks. What is the most helpful action for you to take?",
    "A": "Enroll the team in a course on emotional intelligence so that they will learn to be sensitive to each other's feelings.",
    "B": "Hold a team meeting and facilitate the creation of a team charter that includes ground rules.",
    "C": "Advise the sponsor that there may be a delay in the prototype delivery.",
    "D": "Hold a networking event so that team members can get to know each other better.",
    "Correct": "B",
    "Explanation": "The key to this question is that a deliverable is due soon, and the team conflict is putting that goal in jeopardy. The most efficient action for you to take is to have the team agree on ground rules that they can then hold themselves to. A team charter typically includes operating guidelines, decision-making criteria, and communication expectations. Enrolling a team in training may be of use long-term, along with a networking event but will not help the immediate situation. It is never a good idea to inform the sponsor there may be a delay due to a situation that you, as the project manager, are ultimately accountable for."
  },
  {
    "Question": "The new cloud computing project had been going well when Tammy, the project manager, received a call from an irate stakeholder that there were several issues on the project, and they were not being addressed or being given more visibility. Tammy knew that there was an issue log that had the current status information on these problems. Tammy was, therefore, not clear as to why the stakeholder was not aware of this. What would be the most appropriate action for Tammy?",
    "A": "Tammy should tell the stakeholder that they needed to review the issue log if they were interested in knowing the latest status on a given issue.",
    "B": "Tammy should forward the stakeholder a copy of the issue log.",
    "C": "Tammy should analyze whether there was an issue with the project management information system that was preventing people from accessing and interpreting the issue log effectively.",
    "D": "Tammy does not need to take action since she had executed everything correctly on her end.",
    "Correct": "C",
    "Explanation": "Just because there is a process in place for documenting and updating issues does not mean that it is an effective process. Tammy should analyze whether there are problems with the process and make any needed updates to it. Forwarding a copy of the log and telling the stakeholder to review it may work in the short run but would not fix the problem if there is truly an issue with the process. Taking no action would annoy the stakeholder further and not solve the problem."
  },
  {
    "Question": "As a project manager involved in the Control Procurements process you are aware that early termination of a contract is a special case of procurement closure. The special cases of procurement closure can result from all of the following except?",
    "A": "Convenience of the buyer provided in the contract",
    "B": "Cause or convenience outside the terminations clause of the contract",
    "C": "Mutual agreement of both parties to terminate",
    "D": "Default of one party",
    "Correct": "B",
    "Explanation": "Early termination of a contract is a special case of procurement closure that can result from a mutual agreement of both parties, from the default of one party, or for the convenience of the buyer if provided for in the contract. The rights and responsibilities of the parties in the event of an early termination are contained in a terminations clause of the contract."
  },
  {
    "Question": "The cost baseline is developed during which process?",
    "A": "Develop schedule",
    "B": "Determine budget",
    "C": "Estimate costs",
    "D": "Monitor & control project work",
    "Correct": "B",
    "Explanation": "The cost baseline or project budget is developed in the Determine Budget process which is a planning process in project cost management."
  },
  {
    "Question": "The cost baseline or project budget is developed in the Determine Budget process which is a planning process in project cost management.",
    "A": "The critical path always has zero total float, and it shows the earliest possible time to complete the project",
    "B": "The critical path can have zero, positive, or negative float.",
    "C": "A project can have only one critical path",
    "D": "The critical path consumes the biggest portion of the project budget compared to other paths",
    "Correct": "B",
    "Explanation": "The critical path can have negative total float in the case that there is a constraint set on the project finish date or positive float in the case where the project is ahead of schedule. Typically, however, the critical path has zero float."
  },
  {
    "Question": "While acquiring your project team you realize that according to the project charter a specific consultant is required to be on your team. This consultant has particular knowledge and your client has dictated that you hire him as a team member. This situation describes which one of the tools and techniques of the Acquire Resources process?",
    "A": "Multicriteria Decision Analysis",
    "B": "Negotiation",
    "C": "Pre-Assignment",
    "D": "Virtual Teams",
    "Correct": "C",
    "Explanation": "Pre-assignment involves selecting project team members in advance. It occurs when specific people were promised as part of the project proposal, the project is dependent on expertise of particular persons, or staff assignments are defined within the project charter."
  },
  {
    "Question": "You are assigned as the manager of a huge multi-billion dollar infrastructure project with a time span of 3 years. You are working in the planning process group of your project and currently you are creating the project WBS. Due to lack of information you decide to create the WBS of the commissioning phase of the project (which is the last phase) in more details later on when you have more information. This approach to creating the WBS is also known as:",
    "A": "Agile planning",
    "B": "Progressive planning",
    "C": "Water fall planning",
    "D": "Rolling wave planning",
    "Correct": "D",
    "Explanation": "Rolling wave planning involves planning near-term items in greater detail than those that are further off in time."
  },
  {
    "Question": "Your project is 4 weeks behind schedule and you have been asked to crash the project in order to make up the lost time. The tasks listed in the table below are all on the critical path. Which of the tasks below would you crash?",
    "A": "Tasks C & E",
    "B": "Tasks B & D",
    "C": "Task A",
    "D": "Tasks D & E & F",
    "Correct": "A",
    "Explanation": "When crashing a project you will always crash those tasks that have the smallest crash cost. While all of these answers will give you a 4 week reduction in duration, crashing tasks C & E is the cheapest option: Task A = 6,500 Tasks C & E = 2,000 + 3,500 = 5,500 Tasks B & D = 2,500 + 3,500 = 6,000 Tasks D & E & F = 3,500 + 3,500 + 4,000 = 11,000",
    "img": "/31Picture.png"
  },
  {
    "Question": "You are managing a project and one of your close friends is also a manager at the client organization. During the project execution, your friend asks for changes to be made in the project scope, and with the reasoning that the changes are critical to the success of the project, he asks you to handle them on an informal basis. He argues that if you want to follow the normal change procedures you will lose considerable time. What should you do in this situation?",
    "A": "Explain to the manager that the change should be handled through the formal change management process and it should be documented.",
    "B": "Since what the manager has asked you is unethical you should refuse the changes.",
    "C": "Comply with the manager’s request since it is critical to the project success.",
    "D": "Perform the changes according to the manager’s request because they are crucial to the project success, but document them later on when the project is on track and there are no more changes to be made.",
    "Correct": "A",
    "Explanation": "The correct response is that you would explain to the manager that you would need to formally document these as part of a project scope change and put it through the change management process. Complying with the manager’s request is incorrect and violates the code of ethics and professional responsibility that you have towards your organization. Refusing to take up the changes may be too drastic a step."
  },
  {
    "Question": "As a project manager you are using a fishbone diagram to find the potential risks on your project. Which process are you in?",
    "A": "Plan Risk Response",
    "B": "Control Quality",
    "C": "Perform Qualitative Risk Analysis",
    "D": "Identify Risk",
    "Correct": "D",
    "Explanation": "A fishbone diagram (also called cause and effect analysis or Ishikawa diagram) is used in the Identify Risks process to determine the potential risks that might affect the project."
  },
  {
    "Question": "As a project manager, you are currently involved in a Close Project or Phase process. In this situation which one of the following activities might possibly be unnecessary?",
    "A": "Finalizing all activities across all of the Project Management Process Groups.",
    "B": "Measuring the project scope against the project management plan.",
    "C": "Performing activities such as finalizing open claims, updating procurement records to reflect final results, and archiving such information for future use.",
    "D": "If a project is terminated before completion, starting procedures to investigate and document the reasons for this early termination.",
    "Correct": "C",
    "Explanation": "Closing out a contract involves administrative activities such as finalizing open claims, updating records to reflect final results, and archiving such information for future use. Procurement Close could be done at any stage of the project and is not associated only with Close Project or Phase process."
  },
  {
    "Question": "You are the construction project manager of an important stadium which is going to be used for the Winter Olympics. The games start a month from now, and your project has faced some weather delays in pouring the concrete for the landscaping. You know that bad weather might affect the quality of the concrete, however since the deadline is closing you decide to not delay the project anymore and go ahead with the remaining concrete work. Which risk strategy are you undertaking?",
    "A": "Transfer",
    "B": "Exploit",
    "C": "Mitigate",
    "D": "Accept",
    "Correct": "D",
    "Explanation": "In this situation your are taking the Acceptance strategy. Acceptance is adopted when there is no possibility to eliminate all threats from a project. This means the project team has decided not to change the project management plan to deal with a risk or is unable to identify a response strategy. This strategy can be active or passive acceptance. Passive Acceptance: No action except documenting the strategy and leave project team to deal with the risks as they occur. Active Acceptance: Establish a contingency reserve (time/money/resources)."
  },
  {
    "Question": "Rhonda is an IT Manager responsible for an important new project. The stakeholders are encouraging her to use Scrum; however, her team doesn’t have experience with it. What is the most important cultural factor Rhonda should ensure is in place for a successful change to this method?",
    "A": "A safe and transparent environment",
    "B": "A focus on speed over stability",
    "C": "An emphasis on flexibility over predictability",
    "D": "An atmosphere that encourages execution over exploration",
    "Correct": "A",
    "Explanation": "While speed and flexibility are important qualities for an agile project, the most important cultural norm for change is a safe, honest, and transparent environment. Encouraging execution over exploration is more indicative of an environment suited towards predictive methods."
  },
  {
    "Question": "Tom is managing a software development project in a large IT firm. According to the project essential requirements, he has written an email to one of the functional managers and requested a number of staff to be assigned to his project on a permanent basis for a 2-week period. The functional manager has rejected Tom’s request. What should Tom do in this situation?",
    "A": "Raise the issue to higher level managers who can decide on project priorities",
    "B": "Change the sequence of activities so that he can cope with the resource limitations",
    "C": "Record this as a risk in the risk register",
    "D": "Negotiate with the functional manager",
    "Correct": "D",
    "Explanation": "Tom as the project manager has the ultimate responsibility of acquiring the resources on time. In this situation he should use the negotiation tools and techniques to acquire the project team. Of course other items might also be correct in some situations, but the first most responsible way is to do negotiation with the functional managers."
  },
  {
    "Question": "You are managing a residential building construction project. Your client has just requested a change in the lighting system which may increase project risk and costs. What should be your first action?",
    "A": "Raise the issue to the project sponsor",
    "B": "Issue a Change Request",
    "C": "Update the project risk register",
    "D": "Analyze the impacts of the change",
    "Correct": "D",
    "Explanation": "The first action after receiving any change request is to analyze the impacts. Then after comparing the impacts to the plan you may need to issue a change request to modify the project scope. Raising the issue to the project sponsor is also possible once you are aware of the impacts of the change."
  },
  {
    "Question": "For the purpose of recording project lessons learned, you are analyzing the major delay in the project schedule. The root cause of the delay was a demonstration done by a group of green initiative supporters. They were unhappy because their representatives were not informed about all of the arrangements that you are taking to protect the environment. What could you and your team have done better to prevent this from happening?",
    "A": "A more accurate risk response planning",
    "B": "A more accurate stakeholder identification",
    "C": "A clearer communication management plan",
    "D": "A better project management plan",
    "Correct": "B",
    "Explanation": "Identifying stakeholders and understanding their relative degree of influence on a project is critical. Failure to do so can extend the timeline and raise costs substantially. An important part of a project manager’s responsibility is to manage stakeholder expectations and develop a strategy to keep them satisfied."
  },
  {
    "Question": "In the Plan Quality Management process, which of the following is not attributable to the cost of non-conformance?",
    "A": "Rework",
    "B": "Quality measures",
    "C": "Warranty",
    "D": "Downtime",
    "Correct": "B",
    "Explanation": "Quality measures are not an attribute of the cost of non-conformance. The cost of non-conformance result in some kind of a loss or rejection of the project’s output."
  },
  {
    "Question": "Categorizing identified stakeholders can assist the project team in building valuable relationships with these stakeholders as the project progresses. All of the following techniques are useful for this purpose except for",
    "A": "Stakeholder cube",
    "B": "Stakeholder engagement assessment matrix (SEAM)",
    "C": "Salience model",
    "D": "Power/Interest grid",
    "Correct": "B",
    "Explanation": "Stakeholder cube, the Salience model, and the Power/Interest grid are stakeholder mapping and categorization techniques and are used in the Identify Stakeholders process. Stakeholder engagement assessment matrix allows the team to analyze the variance between what the existing and desired engagement levels of the stakeholders are and is used in Plan Stakeholder Engagement."
  },
  {
    "Question": "Your company has a new product concept to replace its standalone customer relationship management software with a cloud-based version that has a number of new attractive features. The project is approximately two months underway, and you are receiving complaints from some of the team members that the information they need is not being readily shared by several of the team. Some of this information involves knowledge from past projects regarding how the old products were architected. What would be the most helpful action for you to take that will improve this situation?",
    "A": "Ask the more experienced team members to document their knowledge on the past products and then pass out a copy to the project team.",
    "B": "Ask the team to work out the situation on their own and then check back if they do not make progress.",
    "C": "Speak to the team members who are not sharing information and emphasize the importance of sharing.",
    "D": "Facilitate an in-person workshop event that allows team members to get to know each other and where you can present the vision and expectations for the project.",
    "Correct": "D",
    "Explanation": "Asking team members to write documentation on past products is an inefficient way to attain information. Asking team members to handle it on their own will likely not be successful since their reporting of the issue to you is an indication that this has not worked so far. Speaking to the team members who are not sharing the information may be necessary at some point. However, the most important action for you now is to attempt to improve the culture. Informal and face-to-face interaction is the best way to begin to build trust so that people will be more willing to share information. Additionally, emphasizing the objectives and need for the project reinforces the shared vision that you are attempting to align everyone around."
  },
  {
    "Question": "You are managing a small project in the context of a large organization. A strategic decision made in the organization was to shut down one of the operation units which was supposed to work a few days for your project. This might lead to missing a major milestone in your project so you need to do the required planning to acquire outside resources to get your project activity done. Which tools and techniques of the Plan Risk Response process will help you in this situation?",
    "A": "Strategies for positive risks or opportunities",
    "B": "Strategies for negative risks or threats",
    "C": "Contingent response strategies",
    "D": "Risk Reassessment",
    "Correct": "C",
    "Explanation": "This is the situation where the risk response happens after the trigger which is the sudden shut down of an operational unit in the company. Some responses are designed to use only if a specific event occurs. It is appropriate for the project team to make a response plan that will be executed only under certain predefined conditions (triggers like missing intermediate milestones). The risk response occurs BEFORE the risk and tries to alter the probability and/or impact while the contingency plan only occurs AFTER the trigger (usually the risk event) and focuses only on changing the impact."
  },
  {
    "Question": "A project manager recently assessed the team’s performance using earned value metrics and found that the rate of deliverable completion has slowed. After some investigating, he determined that one of the team members is inexperienced in the technique that the team has chosen to develop the software for the current phase of the project. He meets with this team member and suggests that they take a two-day class that others on the team have taken previously. What should the project manager do next?",
    "A": "Check back with the team member to verify whether the training took place and was helpful.",
    "B": "Advise the team member's supervisor that the team member was inexperienced and should be mentored.",
    "C": "Ask the client if the schedule can be extended since the project is no longer on pace.",
    "D": "Reassign the team member to tasks they are more familiar with.",
    "Correct": "A",
    "Explanation": "Checking back with the team member to verify the effectiveness of the training is the most appropriate next step. It is the job of the project manager to not only recommend training opportunities for their team but to ensure that the training was effective. It may be a good idea to tell their supervisor that they will be taking the training. However, it is not clear that mentoring is needed until the project manager has had an opportunity to assess how well the training went. Additionally, it is the responsibility of the project manager, rather than the functional manager, to see to it that a mentor is assigned since the skills in question are needed for his project. Reassigning tasks and asking for a client extension would be premature and might be unnecessary. Although the pace has slowed, there is no indication from the question that the project is behind schedule."
  },
  {
    "Question": "Projects, by definition, represent change since each one is unique. Some projects represent a greater change to the organization than others, such as when changing a project methodology from a predictive to an adaptive one if it is new to the organization. Fill in the blank regarding the most important cultural norm necessary to create organizational change.",
    "A": "Safe",
    "B": "Need other options",
    "C": "Need other options",
    "D": "Need other options",
    "Correct": "A",
    "Explanation": "The answer is safe. According to the APG, the most important cultural norm needed is one that enables a safe work environment."
  },
  {
    "Question": "You are managing an airport construction company. In the middle of the project you realize that one of the subcontractors is not meeting the quality requirements as stipulated in their contract. This is a risk that may result in the final product of the project being rejected by your client. What is your first course of action?",
    "A": "Initiate a change request",
    "B": "Perform claim administration",
    "C": "Perform inspection & audit",
    "D": "Raise the risk to the Sponsor",
    "Correct": "C",
    "Explanation": "According to the PMBOK® Guide (6th Edition), inspections and audits required by the buyer and supported by the seller as specified in the procurement contract can be conducted during execution of the project to verify compliance in the seller’s work processes or deliverable. If authorized by contract, some inspection and audit teams can include buyer procurement personnel."
  },
  {
    "Question": "You are in charge of performing the financial analysis for a troubled project in your company. The project is currently on hold and based on the results of your work, top management will decide on continuing or dropping the project. Which category of costs should you not consider in your analysis?",
    "A": "Indirect costs",
    "B": "Fixed Costs",
    "C": "Variable Costs",
    "D": "Sunk Costs",
    "Correct": "D",
    "Explanation": "Sunk costs are the costs that are expended in the past. Sunk costs should not be considered when deciding on continuing a project."
  },
  {
    "Question": "As a project manager in a large organization with various projects similar to yours, you are responsible to report the project status to the top management in a way that quickly and easily gives them the required information. Which one of the following is the best type of report to provide the required information to senior management?",
    "A": "Project management plans",
    "B": "Project detailed schedules",
    "C": "Gantt Charts",
    "D": "Milestone reports",
    "Correct": "D",
    "Explanation": "The only report that best suits to the needs of senior management is the milestone report. The rest of the mentioned documents include a lot of redundant or detailed information for this purpose."
  },
  {
    "Question": "Which of these is an output from the Acquire Resources process?",
    "A": "Organizational chart",
    "B": "Project team assignments",
    "C": "RAM",
    "D": "Staffing Management Plan",
    "Correct": "B",
    "Explanation": "After determining elements such as the roles and responsibilities, reviewing recruitment practices, and negotiating for staff, project team members are assigned to project activities as part of the Acquire Resources process."
  },
  {
    "Question": "Which one of the following is not an input to the Develop Project Charter process?",
    "A": "Agreements",
    "B": "Business Case",
    "C": "Stakeholders Register",
    "D": "Organizational Process Assets",
    "Correct": "C",
    "Explanation": "Inputs of the Develop Project Charter process are: Business Case, Agreements, Enterprise Environmental Factors, Organizational Process Assets"
  },
  {
    "Question": "As a project manager, you are using root cause analysis to determine what the potential risks might be in your project. Which process best describes the process in which you are involved?",
    "A": "Plan Quality",
    "B": "Identify Risks",
    "C": "Control Quality",
    "D": "Plan Risk Responses",
    "Correct": "B",
    "Explanation": "You are in the Identify Risks process because root cause analysis tools can help identify potential threats based on past experience of issues experienced. Root cause analysis is used in both quality management and risk management. However, the situation explained in this question refers only to the information gathering techniques of the Identify Risks process."
  },
  {
    "Question": "You are a construction project manager. In a formal project management training you are told that you need to collect information on contract schedule, scope, quality, and cost performance along with all contract change documentation, payment records, and inspection results. You are also told by your instructor that this information can be used for lessons learned and as a basis for evaluating contractors for future contracts. Which document is your instructor talking about?",
    "A": "Claims Administration",
    "B": "Close Project or Phase",
    "C": "Inspections and Audits updates",
    "D": "Procurement Documentation",
    "Correct": "D",
    "Explanation": "According to the PMBOK® Guide (6th Edition), to close the contract, all procurement documentation is collected, indexed, and filed. Information on contract schedule, scope, quality, and cost performance along with all contract change documentation, payment records, and inspection results are cataloged. This information can be used for lessons learned and as a basis for evaluating contractors for future contracts."
  },
  {
    "Question": "You have just been assigned to the photo transfer project. You are beginning to meet with the stakeholders and have made some observations. You notice that the team of seven software developers has been given quite a bit of autonomy in how they conduct their work. The sponsor is pleased with the work so far, as is the business representative, who has been giving the team regular feedback on their deliverables. What methodology is the team most likely following?",
    "A": "Adaptive",
    "B": "Predictive",
    "C": "Hybrid",
    "D": "Waterfall",
    "Correct": "A",
    "Explanation": "Small autonomous teams that have earned the trust of project stakeholders are characteristics of an adaptive culture. The fact that the team is receiving regular feedback is another clue that an iterative, incremental lifecycle is likely being followed."
  },
  {
    "Question": "You are several weeks into a new project, which is one of the most visible ones in the company. You are still getting the lay of the land and meeting with various stakeholders that include suppliers, customers, functional managers, and individual contributors. At some of these meetings, you are beginning to hear talk that not everyone is pleased that this project is taking place and is being given such high priority. You realize you have some tools that might assist you in fleshing out this problem. Which one would be most appropriate for you to use?",
    "A": "The use of surveys to get feedback.",
    "B": "The stakeholder engagement assessment matrix.",
    "C": "The use of ground rules.",
    "D": "Preparing and delivering a PowerPoint presentation to all the stakeholders on the benefits of the project.",
    "Correct": "B",
    "Explanation": "The Stakeholder engagement assessment matrix (SEAM) enables you to plot whether stakeholders are resistant, neutral, supporting, or leading in their attitude towards the project. Based on where you would like each of these stakeholders to be, you can plot strategies to gain their support. Not every stakeholder will require a strategy, so it is important to plot where each is desired to be."
  },
  {
    "Question": "According to the latest update of the project schedule, you realize that the project will be completed one month after the desired completion date. You have extra resources on hand and the activity dependencies are preferential. The project is not of high risk and the SPI up to now is 0.89. As a project manager, what would be your best course of action under these circumstances?",
    "A": "Make more activities concurrent",
    "B": "Leveling the resources",
    "C": "Shift some of the resources from the preferential dependencies to the external ones",
    "D": "Eliminate some of the activities which are of lower importance",
    "Correct": "A",
    "Explanation": "Leveling the resources would generally increase the project duration. Removing the activities under some conditions and using the project change process (discretionary dependency) might be possible but considering that dependencies are preferential and you have extra resources the first thing could be to make more activities concurrent."
  },
  {
    "Question": "Conflicts are common and unavoidable in projects. Which of following are the three most common sources of conflicts in projects?",
    "A": "Schedules, Cost, Resources",
    "B": "Schedules, Project priorities, Resources",
    "C": "Cost, Resources, Personalities",
    "D": "Project priorities, Resources, Cost",
    "Correct": "B",
    "Explanation": "Conflict can come from seven main sources, of which the first three account for 50%: 1. Schedules, 2. Project priorities, 3. Manpower/human resource availability, 4. Technical opinions, 5. Procedural or project administration, 6. Costs, 7. Personalities"
  },
  {
    "Question": "As the manager of a highly critical project, you walk into your office and receive a phone call from your client notifying you that they need an urgent review meeting about the delay that occurred in the delivery of one of the major pieces of equipment for the project. You open your e-mail and you get bombarded with the emails coming from two of your team about a conflict that started between them this morning. After a few minutes you get a phone call from one of them while the other one shows up at your office. Which conflict resolution technique would you use immediately?",
    "A": "Collaborating",
    "B": "Forcing",
    "C": "Compromising",
    "D": "Smoothing",
    "Correct": "D",
    "Explanation": "Collaborating or problem solving is the best way to resolve conflict but not in this situation. Since you should choose a technique to deal with the conflict immediately and it’s explained that there is an urgent meeting on an important issue in your critical project that you that you need to take care of, the best method in this situation would be to delay the conflict resolution, i.e. smoothing."
  },
  {
    "Question": "You have recently been assigned as the manager of a highly critical national project which should be finished in a very short period of time compared to the similar projects. After developing the first draft of the project network diagram you see that the project cannot be finished on time. If the network diagram cannot be changed anymore and you have extra human resources, what would be the best approach?",
    "A": "Fast tracking",
    "B": "Crashing",
    "C": "Risk analysis",
    "D": "Leveling the resources",
    "Correct": "B",
    "Explanation": "In this situation, leveling the resources will generally increase the duration. Since the network diagram cannot be changed, the fast tracking option is also not feasible. So crashing remains as the best option in this situation to decrease the duration.",
    "img": "/58Picture.png"
  },
  {
    "Question": "You have just been hired as the project manager in a large company and given the approved project charter. You know that your company always undertakes very challenging projects and your project is not an exception. What should be your first course of action?",
    "A": "Plan risk management",
    "B": "Confirm that all of the stakeholders have contributed to the scope",
    "C": "Identify project risks",
    "D": "Start developing project management plan",
    "Correct": "B",
    "Explanation": "Read the question carefully. You as the project manager have not been involved in the project charter development, therefore it is your responsibility to make sure that the charter is complete and all of the stakeholders have their inputs in it before proceeding with the next step in project planning."
  },
  {
    "Question": "As the manager of a large project, including a huge part of procurement activities, you are about to start project closure activities. All final deliverable of the project are validated. What should be your first step in project closure?",
    "A": "Start closing out contracts",
    "B": "Ensure completion of scope as per Project Management Plan",
    "C": "Start Claims Administration",
    "D": "Start Administrative Closure",
    "Correct": "B",
    "Explanation": "According to the PMBOK® Guide (6th Edition), when closing the project the project manager must review all the prior information from the previous phase closure to ensure that all project work is completed and that the project has met its objectives. Since project scope is measured against the scope management plan, the project manager reviews the scope baseline (part of the project management plan) to ensure completion before considering the project closed."
  },
  {
    "Question": "You are managing a project which is facing some minor delays in the submission of a few project deliverables. You have been asked to a meeting with the team members in charge of the delayed deliverables. Which one of the following tools do you think is the best to be used during the meeting to show the project schedule status to the responsible team members?",
    "A": "Gantt Chart",
    "B": "Project Network Diagram",
    "C": "Milestone Chart",
    "D": "Responsibility Assignment Matrix",
    "Correct": "A",
    "Explanation": "In a meeting with team members you need a tool which shows the schedule details such as delays, completion, and timeline."
  },
  {
    "Question": "Which one of the following items determines the acceptable range of variation of a process on a control chart?",
    "A": "Mean",
    "B": "Upper and Lower Control Limits",
    "C": "Standard Deviation",
    "D": "Specification Limit",
    "Correct": "B",
    "Explanation": "The control limits are set based on the company’s quality standard and indicate the acceptable range. Upper and lower control limits are usually set at +/− 3sigma."
  },
  {
    "Question": "Which technique is not a helpful practice in creating cultural compatibility for an agile approach?",
    "A": "Active executive sponsorship",
    "B": "Management adjusting how team members are assessed",
    "C": "A focus on getting things right the first time",
    "D": "A focus on going fast but not hurrying.",
    "Correct": "C",
    "Explanation": "A focus on getting things right the first time fits with a plan-driven rather than a change-driven approach. The other answer choices describe helpful strategies in an Agile project approach. Agile work should occur at a manageable pace."
  },
  {
    "Question": "You have recently been assigned as the manager of a project after the previous manager quit the company. From the first meetings with the project team you discover that the morale of the team is very low. You speak to some of the team members in private and you feel that they were not given opportunities to participate in team development activities and that they did not have opportunities to grow. Which of the following is a primary factor for this situation?",
    "A": "Use of zero-sum rewards in the project",
    "B": "A poorly defined resource calendar",
    "C": "Too many hierarchical levels in the project organization chart",
    "D": "Poor communication planning",
    "Correct": "B",
    "Explanation": "According to the PMBOK® Guide (6th Edition), resource calendars identify times when the project team members can participate in team development activities. If the team members are unable to find time for such activities, it is likely that the calendar has been poorly planned out."
  },
  {
    "Question": "You are a junior project manager, currently performing schedule controlling activities. You approach one of your experienced colleagues for advice on how to reanalyze the project and predict the project’s remaining duration. She tells you to analyze the sequence of activities with the least amount of scheduling flexibility. Which technique is she referring to?",
    "A": "Gantt chart",
    "B": "Critical path method",
    "C": "Resource leveling",
    "D": "Precedence diagramming method",
    "Correct": "B",
    "Explanation": "The Gantt chart is only a representation of the project schedule, not an analysis method. The precedence diagramming method is a diagramming technique that deals with the relationship between activities, not schedule flexibility. Resource leveling is used to smooth the use of the resources over a period of time. The only option that deals with schedule flexibility is the critical path method which uses activity floats."
  },
  {
    "Question": "Tom is managing a project and he has scheduled a number of training programs for his team. However, he knows that apart from planned training, unplanned training also takes place in a number of ways. Which of these is not one of the ways in which unplanned training can happen?",
    "A": "Conversation",
    "B": "Online",
    "C": "Observation",
    "D": "Project performance appraisals",
    "Correct": "B",
    "Explanation": "According to the PMBOK® Guide (6th Edition), scheduled training occurs as stated in the Human Resource plan and could include online, classroom, on-the-job, etc. Unplanned training, however, takes place through conversation, observation and project performance appraisals conducted during the controlling process of managing the project team."
  },
  {
    "Question": "As the project manager, you are reviewing the control chart related to one of the project deliverables, and you find seven data points in a row on one side of the mean. What should be your next action?",
    "A": "According to the rule of seven this is normal and no action is required",
    "B": "Modify the mean",
    "C": "Perform the quality measurements again to make sure about the data points correctness",
    "D": "Find an assignable cause",
    "Correct": "D",
    "Explanation": "This is an example of the application of the rule of seven in control charts. If you have seven data points in a row on the same side of the mean, statistically the mean has shifted, calling for action to correct the problem. Therefore, the first action is to find the cause of the errors."
  },
  {
    "Question": "As the manager of a large construction project you are currently conducting a meeting with the project management team to decide on a procurement contract. There are opposing views among the team members on the type of contract that best suits your situation. Which one of the following types of contracts have the most cost risk for your organization as a buyer?",
    "A": "Cost plus percentage of costs",
    "B": "Fixed price incentive fee",
    "C": "Time and materials",
    "D": "Cost plus award fee",
    "Correct": "A",
    "Explanation": "In a cost plus percentage of costs contract, the buyer pays all costs while the costs are not limited. In a fixed price type of contract, the buyer has the least cost risk, as any cost overruns are borne by the seller."
  },
  {
    "Question": "As a project manager you are approached by one of the project stakeholders asking for a change in the project work breakdown structure. The stakeholder brings enough reasons to show that the change does not affect the project time or cost. What is the best action for you in this situation?",
    "A": "Ignore the change and ask the stakeholder to formally request a change",
    "B": "Since there are no time and cost effects, implement the change",
    "C": "Raise the change to your management",
    "D": "Look for other impacts that the change may have",
    "Correct": "D",
    "Explanation": "Even though it may not directly affect the time or cost of the project, you need to look at all the impacts of a change on other project constraints. The change may increase risk, reduce quality, etc. As a project manager the best thing to do is to know all of the impacts of a change before taking any other action."
  },
  {
    "Question": "As a project manager, Tom is currently involved in the Control Procurements process. According to the records, one of the vendors has not delivered the items on time. The root-cause analysis shows that the problem was in the proposal evaluation activities that could have been done more accurately. What should Tom do at this point?",
    "A": "Update Procurement Documentation",
    "B": "Update Organizational Process Assets",
    "C": "Conduct Procurement Audits",
    "D": "Update Procurement Contracts",
    "Correct": "B",
    "Explanation": "Lessons learned are a part of Organizational Process Assets. The Project Manager should update this with the procurement experience so that future projects can benefit. Organizational Process Assets Updates are an output of Control Procurements."
  },
  {
    "Question": "All of the followings are examples of the cost of nonconformance except?",
    "A": "Warranty costs",
    "B": "Rework",
    "C": "Inspection",
    "D": "Penalties",
    "Correct": "C",
    "Explanation": "Costs of non-conformance are costs incurred when a project fails to meet the required level of quality. Failure costs are also called costs of poor quality. Costs of non-conformance are categorized into 2 groups: 1.) Internal failure costs — Before releasing product to customer. Includes costs to rework, fix defects, wastage due to internal errors, and unnecessary advertising. 2.) External failure costs — After releasing product to customer. Liability and penalties cost, warranty costs, cost of developing and distributing fix, support calls, and damage control costs."
  },
  {
    "Question": "As a project manager of a challenging software development project, you are in the middle of project execution when one of your team members approaches you and notifies you about a problem that has just happened and that was not included in the risk register. What would be your first action in this situation?",
    "A": "Inform your management",
    "B": "Add this problem to the project risk register",
    "C": "Create a workaround",
    "D": "Redo the Identify Risks process to find out other risks which might have been neglected",
    "Correct": "C",
    "Explanation": "Since this is problem that has occurred and not a risk, there’s no need to add it to the risk register. The Identify Risks process will need to be redone, but since this is a problem, the first action is to come up with a solution for it. Creating a workaround is a solution. You might need to inform management as well, but this is reactive, not proactive, and not the first thing you should do."
  },
  {
    "Question": "You are assigned as the manager of a construction project and the project sponsor has provided you with a draft project charter and immediately asks you to provide a preliminary analysis of the risks on the project. Which of the following would BEST help this effort?",
    "A": "Resource plan from the project planning process",
    "B": "Project scope statement from the project planning process",
    "C": "A conversation with a team member from a similar project that failed in the past",
    "D": "An article from PM Network Magazine",
    "Correct": "C",
    "Explanation": "Since the only document that you have is the project charter, you are still in the project initiating phase and none of the planning documents have been generated yet. So the project scope statement and the resource plan are not correct answers. The magazine article could be correct if it was mentioned that the article gives some applicable insights, particularly about the risks involved in your project."
  },
  {
    "Question": "You are asked by your management to provide an estimation of the costs of a new residential building project using the costs of an earlier residential building project that your company had carried out as the basis for your estimation. What type of estimation is this called?",
    "A": "Analogous Estimating",
    "B": "Bottom-up Estimating",
    "C": "Activity-based Estimating",
    "D": "Parametric Estimating",
    "Correct": "A",
    "Explanation": "According to the PMBOK® Guide (6th Edition), analogous estimating is a technique for estimating the duration or cost of an activity or a project using historical data from a similar activity or project."
  },
  {
    "Question": "A project manager is performing Reserve Analysis as a technique in one of the project management processes that he is currently working on. Which of these is likely to be that process?",
    "A": "Estimate Reserves",
    "B": "Plan Costs",
    "C": "Determine Budget",
    "D": "Develop Schedule",
    "Correct": "C",
    "Explanation": "Reserve Analysis is one of the techniques which is used in more than one process. Three processes of Estimate Costs, Determine Budget, and Control Costs are the Cost Management processes that use this tool."
  },
  {
    "Question": "Knowledge management involves the recording and transferring of experiences and skills to the organization in order to achieve project objectives. Both explicit and tacit knowledge are important for this purpose. One of the advantages of tacit knowledge is that",
    "A": "It is open to interpretation",
    "B": "It can be readily shared",
    "C": "It can be readily codified",
    "D": "It has context built in",
    "Correct": "D",
    "Explanation": "Tacit knowledge, which is the information and belief system a team member has within their minds and realm of experience, is not documented or codified and must be drawn out by others in order to utilize that knowledge. Therefore, unlike explicit knowledge, which is written down, it is more difficult to share. However unlike explicit knowledge, which lacks context and can therefore be open to interpretation, tacit knowledge has context built into it. Refer to section 4.4 of the PMBOK® Guide for additional info."
  },
  {
    "Question": "As a software development project manager, you are approached by one of the software developers telling you that he has added additional features to the end product which were not required in the scope. He also mentions that adding those features did not take any extra time or cost. What should be your action in this situation?",
    "A": "Carefully review and understand the new features",
    "B": "Implement change control process",
    "C": "Ask the software developer to remove the extra features",
    "D": "Ask the team member to issue a change request for the extra features",
    "Correct": "A",
    "Explanation": "As the project manager you are responsible to evaluate the situation before making any decision about the change. This is the first step of the integrated change control. After a complete review of the new features you can realize the possible impacts of the change in terms of quality, risk, etc. on the project."
  },
  {
    "Question": "Your team is involved in selecting a seller for one of the important systems of the project. Two of your team members have a conflict over selecting the seller. One of them believes that you should choose company X while the other argues that company Y should be awarded the contract. Which one of the following will you refer the team to make the decision?",
    "A": "Seller proposals",
    "B": "Source selection criteria",
    "C": "Project management plan",
    "D": "Procurement documents",
    "Correct": "B",
    "Explanation": "The source selection criteria are the primary tools for evaluating potential sellers and should be used by the entire team in order to make a selection."
  },
  {
    "Question": "You are managing a project which is suffering many changes since the initiation. You had to process a lot of changes and you did not have enough time to do anything else. Which one of the followings best describes what you should do in such a project?",
    "A": "Determine if changes are needed. Notify the stakeholders who are affected by the changes and list all of the changes in the scope management plan.",
    "B": "Determine whether the changes are needed and whether they are beneficial to the project. List all of the changes in the scope management plan.",
    "C": "List all of the changes in the project charter, notify the project stakeholders who are affected by the changes and ensure that you have their sign off on the changes.",
    "D": "Determine whether a change is needed and whether it is beneficial to the project, and notify the stakeholders who are affected by the change.",
    "Correct": "D",
    "Explanation": "You never list changes in the scope management plan or in the project charter. As the project manager you need to make sure that changes are needed and beneficial and also to make sure that the stakeholders get notified."
  },
  {
    "Question": "You are a software development project manager and currently you are in the process of developing the project risk management plan. Which of the following is not part of such a plan?",
    "A": "Risk probability",
    "B": "Methodology",
    "C": "Risk categories",
    "D": "Impact Matrix",
    "Correct": "A",
    "Explanation": "The contents of the risk management plan according to the PMBOK® Guide (6th Edition) are methodology, roles & responsibilities, budgeting, risk categories, definition of risk probabilities and impacts, probability & impact matrix, revised stakeholders tolerances, reporting formats, and tracking. Basically the risk management plan describes how risk management will be structured and performed on the project. It does not identify individual risks or the probability of their occurrence."
  },
  {
    "Question": "You have just been assigned to manage a new change-driven project to create a website for one of the company’s best customers. Your team of five is experienced with this project approach and with the customer, although they are starting on the same day as you are. Based on your expertise, what would be the best leadership style you should employ with the team?",
    "A": "Directing",
    "B": "Laissez-Faire",
    "C": "Servant Leader",
    "D": "Coordinator",
    "Correct": "C",
    "Explanation": "Servant Leadership is the best approach for a change-driven project and when the team is experienced. They can be best served by your ability to remove obstacles for them and play interference with other managers and potential distractions."
  },
  {
    "Question": "You are managing a software development project budgeted at $360,000 according to the earned value analysis report which you have on your desk. As of today, you have spent $110,000, and the earned value is $120,000. According to your earned value figures, your SPI is 0.8. Which one of the following options best describes your project status?",
    "A": "Not enough information",
    "B": "On schedule",
    "C": "Behind schedule",
    "D": "Over budget",
    "Correct": "A",
    "Explanation": "EV= $120,000, AC= $110,000, PV= $150,000, SPI= EV/PV, SPI= 120,000/150,000, SPI= 0.8, Since SPI is less than 1, we can conclude the project is behind schedule."
  },
  {
    "Question": "Tom is a project manager managing a bridge construction project for the first time. He has set up a series of interviews with various stakeholders to gather some experiential and historical information on some of the risks. Which process is Tom most probably involved in?",
    "A": "Perform Quantitative Risk Analysis",
    "B": "Plan Risk Responses",
    "C": "Identify Risks",
    "D": "Perform Qualitative Risk Analysis",
    "Correct": "D",
    "Explanation": "Such meetings or interviews are usually done as part of Qualitative Risk Analysis. This method draws on experiential learning and historical data to quantify the impact of risks on project objectives. Read the question carefully. It mentioned that the purpose of the interviews is to gather information about some risks, not to discover some risks."
  },
  {
    "Question": "Which of the following project management processes covers formal completion and handover of the final product/service?",
    "A": "Close Project or Phase",
    "B": "Control Procurements",
    "C": "Validate Scope",
    "D": "Contract administration",
    "Correct": "A",
    "Explanation": "Close Project or Phase is the process of finalizing all activities across all of the Project Management Process Groups to formally complete the project or phase."
  },
  {
    "Question": "The project charter provides the project manager with some benefits and information. Which one of the following is most important for the project manager?",
    "A": "Project authority",
    "B": "The formal role of 'Project Manager'",
    "C": "The project sponsors list",
    "D": "High level project scope",
    "Correct": "A",
    "Explanation": "The project charter formally authorizes the existence of a project, and provides the project manager with the authority."
  },
  {
    "Question": "Which one of the following statements is correct?",
    "A": "Validate scope is primarily concerned with correctness of deliverables.",
    "B": "Control quality is primarily concerned with acceptance of the deliverables.",
    "C": "Validation of scope can only be done at the end of the project.",
    "D": "Control quality is generally performed before scope validation, but these two can be performed in parallel.",
    "Correct": "D",
    "Explanation": "Validate scope is primarily concerned with acceptance of deliverables while control quality is primarily concerned with correctness of the deliverables. Control quality is generally performed before scope validation but these two can be performed in parallel. Validate scope can be done at the end of each project phase in the project life cycle and at other points throughout the project as part of M&C, i.e. validate scope is done multiple times in the project."
  },
  {
    "Question": "What is the most appropriate guideline for managing documentation artifacts at the start of your agile project?",
    "A": "Ensure that there is sufficient detail on the user stories in the sprint backlog so that work can begin.",
    "B": "Ensure that there is sufficient detail for each user story in the product backlog so that work can begin.",
    "C": "Ensure that each user story for the project has been reflected in the product backlog.",
    "D": "Ensure that there is sufficient detail for each user story so that each is roughly equivalent in size.",
    "Correct": "A",
    "Explanation": "The best guideline is to ensure that there is sufficient detail on the user stories in the sprint backlog so that work can begin. User stories for the entire project do not need to be created nor described in detail for work to begin. Only those user stories that will be in the next iteration require sufficient detail. User stories do not need to be similar in size."
  },
  {
    "Question": "What is the critical path with reference to the following network diagram?",
    "A": "B-C-E-F",
    "B": "A-D-F",
    "C": "A-D-E-F",
    "D": "B-C-D-F",
    "Correct": "D",
    "Explanation": "There are 3 different paths in the diagram and we can calculate their duration as: A-D-F = 4 + 10 + 8 = 22 days, B-C-E-F = 5 + 7 + 8 + 8 = 28 days, B-C-D-F = 5 + 7 + 10 + 8 = 30 days. Among the above mentioned paths, B-C-D-F has the longest duration. A-D-E-F which is mentioned as an answer choice is not actually a complete path because activity D is not a predecessor of activity E."
  },
  {
    "Question": "Which one the following is not a benefit of quality audits?",
    "A": "Creating quality metrics",
    "B": "Identify all nonconformities, gaps, and shortcomings",
    "C": "Identify all good and best practices being implemented",
    "D": "Confirm the implementation of approved change requests",
    "Correct": "A",
    "Explanation": "Quality metrics are an output of the Plan Quality process and an input to the Manage Quality process. The other choices are all benefits of quality audits."
  },
  {
    "Question": "Tom is a construction project manager and recently approached an insurance company to insure the project against the possible damages of storms that are predicted to happen in the winter. Which risk response strategy is Tom undertaking?",
    "A": "Avoid",
    "B": "Accept",
    "C": "Mitigate",
    "D": "Transfer",
    "Correct": "D",
    "Explanation": "Risk Transference is a risk response strategy that shifts the impact of a threat to a third party, together with ownership of the response. Taking out insurance or a warranty transfers the risk from the owner to the other party."
  },
  {
    "Question": "Your project team developed a team charter at the start of the project, which is now midway to completion. The charter included a list of ground rules involving decision-making, meeting etiquette, and interpersonal behavior. At a recent meeting, one of the team members began to belittle the idea of another member, causing a heated discussion and everyone leaving the meeting. As the project manager, what should you do?",
    "A": "Meet with the team member who caused the disruption and advise them that this behavior was not appropriate.",
    "B": "Call another meeting to continue the topics on the agenda.",
    "C": "Tell the supervisor of the disruptive employee that he is negatively impacting the project.",
    "D": "Remind the team that they have a team charter and allow them to work the issue out.",
    "Correct": "D",
    "Explanation": "This question is about accountability. A team charter that is created by the team means that the team is accountable for enforcing it. They may need a reminder that this is the purpose of the charter, and they need to be trusted to hold themselves to it."
  },
  {
    "Question": "You are managing a project with a lot of different detailed activities. The project is within budget and the SPI according to the latest earned value report is 1.2. The project risk review meetings are held according to an organized schedule and you are satisfied with the risk management activities of the project. However, you get notified by two different stakeholders that some of the project status reports are not accurate. Which tool will you use to verify whether there is a problem?",
    "A": "Root-cause analysis",
    "B": "Inspection",
    "C": "Observations",
    "D": "Quality audits",
    "Correct": "D",
    "Explanation": "According to the PMBOK® Guide (6th Edition), a quality audit is a structured, independent process to determine if project activities comply with organizational and project policies, processes, and procedures. In this specific case you need to do quality audits to make sure that your team is doing the project reporting in accordance with the project policies and standards."
  },
  {
    "Question": "Which one of the following is not an input to the initiating process group?",
    "A": "Historical project schedules",
    "B": "Lessons learned database",
    "C": "Project scope statement",
    "D": "Company culture",
    "Correct": "C",
    "Explanation": "The project scope statement is an output of the planning process group, so it cannot be available as an input to the initiating process group. The other options are among the Enterprise Environmental Factors or Organizational Process Assets which are inputs of the initiating process group."
  },
  {
    "Question": "You are manager of a project and after a periodic project schedule update, the scheduler working on your team comes to you with the following list of activities. He also mentions that the project is faced with 2 weeks of delay and as a corrective action he proposes to change the sequence and perform activity H concurrent with activity G, instead of after it. What would be your reaction?",
    "A": "This will help all of the delay to be recovered, so accept the proposal",
    "B": "This will help you spend less resources, so accept the proposal",
    "C": "It might affect activity I, so reject the proposal",
    "D": "This does not have any effect on the critical path, so reject the proposal",
    "Correct": "D",
    "Explanation": "According to the list of activities, activity H has float and is not critical. Therefore, changing its sequence to perform it sooner will not change the project finish date. The best way is to complete the critical activities earlier.",
    "img": "/94Picture.png"
  },
  {
    "Question": "You are managing an IT project for an external client. The project is ahead of schedule and your next activities are testing and hand over. Which one of the followings will you be more concerned about in this situation?",
    "A": "Time schedule",
    "B": "Performing quality control",
    "C": "Generating performance reports",
    "D": "Validate project scope",
    "Correct": "D",
    "Explanation": "You are close to performing the final product handover to the external client. Scope validation deals with acceptance by the customer. Without this acceptance, you will not be able to move into the next project phase."
  },
  {
    "Question": "As the product owner of an agile social media app project, you noticed that a competitor has just released an exciting new feature for their app. You realize that this feature will be well-received. What action should you take?",
    "A": "Add this feature to the product backlog and reprioritize the product backlog.",
    "B": "Add this feature to the current sprint backlog and reprioritize the sprint backlog.",
    "C": "Create a change request for this feature",
    "D": "Update the work breakdown structure to include the new feature.",
    "Correct": "D",
    "Explanation": "Agile projects, such as Scrum, do not utilize a formal change control procedure since doing so would slow the team down. The product owner instead is authorized to approve changes. They would not add this feature to the sprint backlog, however, since the team is already committed to the scope for the current sprint. Therefore, adding the feature to the product backlog and reprioritizing the backlog is the best answer.",
  },
  {
    "Question": "A project manager is trying to plan for a contingency reserve as part of the cost estimates for the project. Which of these would be an incorrect way to plan for contingency reserves?",
    "A": "Plan for contingency reserve as a percentage of the estimated cost.",
    "B": "Use quantitative analysis methods to arrive at the contingency reserve.",
    "C": "Start with a zero value for contingency reserve.",
    "D": "Plan for contingency reserve as a fixed number.",
    "Correct": "C",
    "Explanation": "According to the PMBOK® Guide (6th Edition), the contingency reserve may be a percentage of the estimation, a fixed number, or may be developed by using quantitative analysis methods such as a Monte Carlo simulation. Therefore, it would be incorrect to start with a zero value for contingency reserves."
  },
  {
    "Question": "As a project manager you are reviewing a report of the actual cost of the completed work packages. You realize that a few work packages are completed with an actual cost which is substantially lower than their budgeted cost. You will immediately do all of the following actions except?",
    "A": "Try to find ways to increase the actual costs",
    "B": "Make sure that proper resources are utilized",
    "C": "Make sure that the scope is properly done",
    "D": "Make sure about the quality of the work",
    "Correct": "A",
    "Explanation": "All of the incorrect answer choices refer to possible root causes of a variance in the costs. If any of these proves to be the root cause, then the corrective action might result in increasing the actual costs. However, trying to find ways to increase the actual costs is not the first thing to do."
  },
  {
    "Question": "You are a project manager and your company has just completed an unexpected round of layoffs. Morale is low, and human resources are tighter than ever. Your project is now behind schedule because of the loss of resources. Overtime work will be required of everyone for the next several weeks in order to close the gap. One of the critical resources on your project has an upcoming vacation that was approved and scheduled months ago. However, without this resource you will be unable to get back on schedule. What do you do?",
    "A": "Notify the project stakeholders of the situation immediately",
    "B": "Find another resource",
    "C": "Compress the schedule further",
    "D": "Cancel all vacations",
    "Correct": "A",
    "Explanation": "An unexpected loss of project resources due to company downsizing that results in a schedule slip must be communicated to project stakeholders immediately. It would be unfair to penalize the resource by cancelling his vacation simply because it is the easiest way to get back on schedule. Finding other resources by the project manager also doesn’t seem to be possible in this situation."
  },
  {
    "Question": "As the project manager you are negotiating a contract with a seller. You want to go in for a fixed price type of contract. Which other terminology could be used to refer to the fixed price type of contract?",
    "A": "Cost-Plus-Fixed-Fee contract",
    "B": "Time and material contract",
    "C": "Lump sum contract",
    "D": "Cost-Plus-Fee contract",
    "Correct": "C",
    "Explanation": "A fixed price contract is synonymous with a lump sum contract. This type of contract involves a fixed total price, or a lump sum, for a well-defined product.",
  }
]