const questions = [{ 
    question: 'You are a construction project manager and have been recently hired in a well known company as the manager of a highly crucial project. The project is expected to be completed in 2 years. During the project initiation phase you realize that some regulatory and environmental requirements have not been considered in the contract. Failure to meet the mentioned requirements will negatively affect your company’s reputation, but meeting them will require more time and cost, which will lead to budget and time overruns. In that case, there’s also a chance that the client decides to cancel the project. What would you do in that situation?',
    a: 'Your first and immediate action is to disclose your discovery to the project stakeholders and solicit their viewpoints.',
    b: 'This requires a scope change notification that should be written immediately.', 
    c: 'Since this is only a probability it does not need an immediate action. Just try to gather more information as the project goes ahead and decide later on.',
    d: 'As a seasoned construction project manager, contact the regulatory body to find out some workarounds for your project.',
    correct: 'A',
    explanation: 'PMI’s Code of Ethics requires all project managers to comply with all laws and regulations. Failure to immediately and actively disclose that a regulatory requirement has not been addressed puts the company and the project manager in the position of breaking the law.'},
    {
      question: 'Your sponsor will be leaving your project soon due to other obligations. She informs you that her role will be filled with two new people. She assures you that this should not affect the communication complexity of the team since you are only going from eleven to twelve members. Is your sponsor correct?',
      a: 'Yes, because the sponsor is always right.',
      b: 'Yes, adding one additional person adds only one more communication channel for an eleven-member team.',
      c: 'No, Agile teams should be as small as possible.',
      d: 'No, adding one more person adds more than one communication channel for an eleven-member team.',
      correct: 'D',
      explanation: 'Adding one additional person to an eleven-member team adds 11 additional communication channels, which can increase complexity. Eleven members have 55 communication channels, and 12 members have 66 channels: N ∗ (N − 1) / 2 = # of communication channels for the team where N = the number of members. So there are 66 − 55 = 11 channels added.'
    },
    {
        question: 'You are managing a software development project which should be completed in 18 months according to the project contract and schedule. Your customer has recently faced regulatory changes that require your project to be finished 2 months earlier and he asks you to do so. How will you approach this situation?',
        a: 'Inform the customer of the impacts of his requirement to project constraints and, after getting the required approvals, crash the project.',
        b: 'Accept the customer’s request and cut parts of the project scope to meet the new deadline.',
        c: 'Stick to your original schedule and tell the customer that once the contract is signed the project duration won’t change under any circumstances.',
        d: 'Cut the duration of all project activities across the board to meet the requirement.',
        correct: 'A',
        explanation: 'Informing the customer of the impacts to project scope and other constraints, then crashing the cost and schedule is the best approach. Arbitrarily trimming estimates or scope without directly advising your customer is dishonest, while simply refusing to make a change is unprofessional.'
      },
      {
        question: 'According to the contract, your customer has assigned one of his staff to your project office to attend the meetings and contribute to the decision making. However, this person is too confrontational and his behavior to your project team members is intimidating. What should be your action in this situation?',
        a: 'Ask the customer to replace the person.',
        b: 'You unilaterally decide to isolate the person and don’t let him in the project meetings.',
        c: 'Since the person is assigned by your client you don’t have any authority over him, so don’t do anything.',
        d: 'Confront the person about his behavior and its impact on the project. Also, inform the customer about the issue.',
        correct: 'D',
        explanation: 'The best approach to deal with the problems is to confront them. In this situation you should respectfully confront the resource about this behavior, and notify the customer about the situation. Failing to confront the resource or intentionally excluding a required resource from a project is unprofessional, and could negatively impact the project.'
      },
      {
        question: 'The majority of the project management software applications use the ——— method to build the project schedule network diagram.',
        a: 'Leads and Lags',
        b: 'Critical Diagramming',
        c: 'Precedence Diagramming',
        d: 'Activity-On-Arrows Diagramming',
        correct: 'C',
        explanation: 'PDM, also called Activity-On-Node (AON), is the method used by most project management and project planning software packages.'
      },
      {
        question: 'You have just been assigned to a new change-driven project. The team has never worked together before, but they are experienced with agile techniques. Which TWO of the following techniques would be most useful for promoting your team’s performance?',
        a: 'Creation of a detailed schedule with regular milestones.',
        b: 'Allow the team to collaboratively develop a plan to execute the project.',
        c: 'Expose and eliminate communication bottlenecks.',
        d: 'Creation of a change control procedure so that only needed changes are addressed and implemented.',
        correct: 'B, C',
        explanation: 'The key to this question is that it is a change-driven (i.e., Agile) project and the team has experience with this type. A servant leader style is most effective for this environment. Empowering a team to self-organize and work collaboratively and eliminating bottlenecks are characteristics of such a leadership style. A detailed schedule with milestones will not benefit the team’s performance, particularly if the work will be accomplished via a product backlog. Similarly, a change control procedure is generally not needed for change-driven projects since change is built into the system between iterations or sprints.'
      },
      {
        question: 'To formally authorize the project, which of the following documents is necessary?',
        a: 'Project Statement of Work (SOW)',
        b: 'Project Charter',
        c: 'Business Case',
        d: 'Project Contract',
        correct: 'B',
        explanation: 'The project charter is the document that officially authorizes a project and gives the project manager the required authority to assign resources to the project.'
      },
      {
        question: 'The photo transfer project will be starting in a few weeks, and it is up to you to decide which project methodology the team will use. You have some concerns about the project because the customer will not always be available, and the team has mixed experience in agile methods. Also, even though the sponsor is quite supportive in allowing you to choose whichever approach is best, he has given you a warning. He suggests that you be prepared since this particular customer is known to be demanding and changes their mind frequently based on the latest market intelligence they’ve heard. After reviewing the situation, which method would be most appropriate?',
        a: 'Scrum',
        b: 'Predictive',
        c: 'Hybrid',
        d: 'Waterfall',
        correct: 'C',
        explanation: 'Predictive and Waterfall are similar since waterfall is a type of predictive approach. The fact that there will be frequent change implies that this type of approach may not be suitable. Scrum is also risky since the customer will not always be available to the team and the team has mixed experience. A hybrid approach is the best option. In a hybrid lifecycle, those well-known and fixed elements can follow a predictive life cycle, and those that are still evolving can be done with an adaptive approach. This may involve running two portions of the project in parallel or doing the change aspects first until the requirements are better known (i.e., the adaptive portion precedes the predictive portion). A hybrid approach is also ideal for training team members on Agile methods.'
      },
      {
        question: 'You are a project manager and you are about to perform the risk management processes. Which one of the following documents evolves throughout the risk management processes?',
        a: 'Risk Mitigation Plan',
        b: 'Contingency Plan',
        c: 'Risk Profile',
        d: 'Risk Register',
        correct: 'D',
        explanation: 'The risk register is the document that evolves throughout the risk management processes.'
      },
      {
        question: 'As a project manager you are performing scope management processes. What is the function of the WBS Dictionary?',
        a: 'Used as a glossary to define the acronyms used in the project scope statement',
        b: 'It is used for the planning of the project resources',
        c: 'Used as a glossary to define the acronyms used in the project WBS',
        d: 'Describes the details of each component in the project WBS',
        correct: 'D',
        explanation: 'The WBS Dictionary is a detailed description of work packages and their attributes including any technical documentation for each WBS element.'
      },
      {
        question: 'As the manager of a large project, you are performing the Control Procurements process. Which one of the following activities would you likely not be involved in?',
        a: 'Audits',
        b: 'Claims Administration',
        c: 'Inspection',
        d: 'Negotiation',
        correct: 'B',
        explanation: 'Negotiation is used while performing the Conduct Procurements process. The other answer choices are performed during the Control Procurements process.'
      },
      {
        question: 'Some projects have a comprehensive procurement phase that covers buying a huge number of items and for each item several suppliers are contacted to receive their bids. As a project manager in such projects, you need to make sure that every supplier has a clear understanding of the requirements of the project. Which one of the following techniques could be used for this purpose?',
        a: 'Communication Matrix',
        b: 'Formal Presentation',
        c: 'One-on-One discussion',
        d: 'Bidder Conferences',
        correct: 'D',
        explanation: 'Bidder Conferences (also called vendor conferences, contractor conferences, or pre-bid conferences) are meetings between buyers and all prospective sellers prior to the submittal of bids or proposals. They are used to ensure that all sellers have a clear and common understanding of the procurement and that no bidders receive preferential treatment. Responses to questions are incorporated as procurement document amendments. To be fair, buyers must ensure that all sellers hear every question from individual sellers and every answer from the buyer.'
      },
      {
        question: 'You have just been given the responsibility to staff and oversee a new Scrum project. There are very limited resources, and you don’t have the budget to hire new people. One individual has been pre-assigned to the project, and she has asked to be the project’s scrum master. Although she has participated in Scrum projects previously, she has never had this role. What would be your best option in this situation?',
        a: 'Tell the team member that you need someone who is experienced in the role.',
        b: 'Ask the functional manager if they have anyone available who can serve as the scrum master.',
        c: 'Allow the team member the role but ask that she enroll in scrum master training right away.',
        d: 'Assign the team member a coach who has experience in being a scrum master.',
        correct: 'D',
        explanation: 'Without the budget to hire and with resources already being limited, it is not feasible to find someone who is already experienced. Scrum master training is a possibility but seeing as the team member has experience on Scrum projects, she is likely already familiar with what a scrum master role entails. Assigning her an agile coach who can work with her throughout the project is the most feasible option.'
      },
      {

        question: 'As the project manager you are reviewing the earned value analysis report performed by your team. The SPI is 0.87. What does this figure mean to you?',
        a: 'Your project is running according to the budget.',
        b: 'The project is getting 87 cents out of each dollar spent.',
        c: 'You are ahead of schedule.',
        d: 'The progress of your project is only 87% of what it is planned, so you are behind the schedule.',
        correct: 'D',
        explanation: 'The Schedule Performance Index (SPI) is a measure of the project performance in terms of the time schedule. SPI < 1 shows that the project is behind schedule.'
      },
      {
        question: 'As the project manager you wish to use a document that shows the work assigned to each project team member. What’s the title of the document that you will use?',
        a: 'Responsibility Assignment Matrix (RAM)',
        b: 'Project Resources Matrix (PRM)',
        c: 'Resource Planning Chart (RPC)',
        d: 'Project Schedule',
        correct: 'A',
        explanation: 'A Responsibility Assignment Matrix (RAM) illustrates association between work packages/activities and team members. It makes it easy for team members to view all the project activities for which a particular person is assigned, and the level of their responsibility.'
      },
      {
        question: 'You are managing a project in a highly cost-sensitive company. Therefore, you need to reduce the costs to the extent possible. Which one of the following categories of cost would you consider as the first option for cost reduction?',
        a: 'Variable and fixed costs',
        b: 'Indirect and variable costs',
        c: 'Indirect and direct costs',
        d: 'Direct and variable costs',
        correct: 'D',
        explanation: 'Direct costs belong to project resources which can be scaled down or reduced. Variable costs depend on the amount of work performed by resources. Therefore, there is a higher opportunity to reduce it by reducing the scope and amount of work required.'
      },
      {
        question: 'You are leading an Agile project for a new IT initiative in the company that will get a lot of visibility. You have been disappointed that the quality of the product delivered for the last several sprints has been poor. What is the best option that the team should take?',
        a: 'Ensure transparency of the work progress by displaying the KanBan board in the team war room.',
        b: 'Hold retrospectives more frequently',
        c: 'Ensure the team is using test-driven development',
        d: 'Remind the team about the importance of an agile mindset.',
        correct: 'C',
        explanation: 'Test-driven development is a quality practice that drives defects down. Since this is a quality issue, this would be the best option. Transparency, more frequent retrospectives, and the agile mindset are important agile practices and attributes, but they will not help the quality issue.'
      },   
      {
        question: 'As a project manager, you are involved in purchasing various items for the project. However, you suddenly receive an official letter from your client ordering the immediate termination of the project. What will be your best course of action?',
        a: 'Refer to Project Closure Guidelines in Organizational Process Assets',
        b: 'Perform Inspections & Audits',
        c: 'Perform Procurement Audits',
        d: 'Release the Project Team',
        correct: 'A',
        explanation: 'Since this is a case of project closure before its completion, as a project manager, the BEST thing to do for you is to make sure the steps to close a project are followed. Project Closure Guidelines in Organizational Process Assets are the best source of information in such a situation.'
      },
      {
        question: 'Frank has been meeting with stakeholders to flesh out and understand the requirements for his new project. Which activity would he likely not be engaged in?',
        a: 'Inspection',
        b: 'Facilitation',
        c: 'Questionnaires & Surveys',
        d: 'Prototypes',
        correct: 'A',
        explanation: 'An inspection is a tool and technique for the Validate Scope process, while the other options are all the tools used for the Collect Requirements process.'
      }
      ,
      {
        question: 'In an industrial project, the equipment installation can be started 15 days after the equipment foundation is completed. What type of dependency is this?',
        a: 'Start-to-finish with a 15-day lead',
        b: 'Finish-to-start with a 15-day lag',
        c: 'Finish-to-start with a 15-day lead',
        d: 'Finish-to-finish with a 15-day lag',
        correct: 'B',
        explanation: 'The dependency between the two activities is a Finish-to-Start (FS) type because the second activity can start only after the completion of the first one. There is also a time lag of 15 days before the second activity can start.'
      },
      {
        question: 'According to Tuckman, which of the following is not one of the stages of team development?',
        a: 'Delegating',
        b: 'Performing',
        c: 'Forming',
        d: 'Norming',
        correct: 'A',
        explanation: 'According to Tuckman, the stages of team development are Forming, Storming, Norming, Performing, and Adjourning.'
      },
      {
        question: 'Ashley, the agile team’s product owner, recently hired Bill as a software developer for their team. Unfortunately, after Bill was hired, another product owner was able to reserve 50% of Bill’s time for their project. What is one of the key problems with not having Bill dedicated to Ashley’s team?',
        a: 'Bill may not have the skills for the other team since he was not hired with their project in mind.',
        b: 'Bill would become a generalist, or T-person, rather than a specialist.',
        c: 'Bill may become dissatisfied with having too much work to do.',
        d: "The team's productivity would be affected because of Bill's task switching.",
        correct: 'D',
        explanation: 'The key problem with working 25–50% on a project is that multitasking from one project to another affects the whole team’s productivity. Bill likely has the skills needed, or the other product owner wouldn’t have asked for him. Generalists and T-shaped people are sought after for Agile teams, so this would not be a problem. We don’t know enough about Bill’s workload to know if he would be dissatisfied.'
      },
      {
        question: 'Which TWO activities might a project manager be doing while acquiring resources for their project?',
        a: 'Comparing labor rates to what is allocated in the project budget.',
        b: 'Creating the staffing management plan.',
        c: 'Planning communication protocols for virtual team members.',
        d: 'Sending team members to the training needed for the project.',
        correct: 'A, C',
        explanation: 'Part of acquiring resources involves verifying if the costs of the selected team members will fit within the project budget. If virtual team members are an option, then special communication protocols will need to be put in place to minimize misunderstanding and conflict. Creating the staffing management plan would take place during the plan resource management process, and sending team members to training would occur during the develop team process.'
      },
      {
        question: 'Your website development project is newly underway. The team appears to be in the “storming” stage, with several members insisting that the process occurs in a certain way and others unwilling to participate after their views were overruled. You recognize that cooperation and collaboration are imperative for the team to achieve the sponsor’s goal of a working prototype within the next few weeks. What is the most helpful action for you to take?',
        a: 'Enroll the team in a course on emotional intelligence so that they will learn to be sensitive to each other\'s feelings.',
        b: 'Hold a team meeting and facilitate the creation of a team charter that includes ground rules.',
        c: 'Advise the sponsor that there may be a delay in the prototype delivery.',
        d: 'Hold a networking event so that team members can get to know each other better.',
        correct: 'B',
        explanation: 'The most efficient action for you to take is to have the team agree on ground rules that they can then hold themselves to. A team charter typically includes operating guidelines, decision-making criteria, and communication expectations. Enrolling a team in training may be of use long-term, along with a networking event but will not help the immediate situation. It is never a good idea to inform the sponsor there may be a delay due to a situation that you, as the project manager, are ultimately accountable for.'
      },
      {
        question: 'The new cloud computing project had been going well when Tammy, the project manager, received a call from an irate stakeholder that there were several issues on the project, and they were not being addressed or being given more visibility. Tammy knew that there was an issue log that had the current status information on these problems. Tammy was, therefore, not clear as to why the stakeholder was not aware of this. What would be the most appropriate action for Tammy?',
        a: 'Tammy should tell the stakeholder that they needed to review the issue log if they were interested in knowing the latest status on a given issue.',
        b: 'Tammy should forward the stakeholder a copy of the issue log.',
        c: 'Tammy should analyze whether there was an issue with the project management information system that was preventing people from accessing and interpreting the issue log effectively.',
        d: 'Tammy does not need to take action since she had executed everything correctly on her end.',
        correct: 'C',
        explanation: 'Just because there is a process in place for documenting and updating issues does not mean that it is an effective process. Tammy should analyze whether there are problems with the process and make any needed updates to it. Forwarding a copy of the log and telling the stakeholder to review it may work in the short run but would not fix the problem if there is truly an issue with the process. Taking no action would annoy the stakeholder further and not solve the problem.'
      },
      {
        question: 'As a project manager involved in the Control Procurements process, you are aware that early termination of a contract is a special case of procurement closure. The special cases of procurement closure can result from all of the following except?',
        a: 'Convenience of the buyer provided in the contract',
        b: 'Cause or convenience outside the terminations clause of the contract',
        c: 'Mutual agreement of both parties to terminate',
        d: 'Default of one party',
        correct: 'A',
        explanation: 'Early termination of a contract is a special case of procurement closure that can result from a mutual agreement of both parties, from the default of one party, or for the convenience of the buyer if provided for in the contract. The rights and responsibilities of the parties in the event of an early termination are contained in a terminations clause of the contract.'
      },
      {
        question: 'The cost baseline is developed during which process?',
        a: 'Develop schedule',
        b: 'Determine budget',
        c: 'Estimate costs',
        d: 'Monitor & control project work',
        correct: 'B',
        explanation: 'The cost baseline or project budget is developed in the Determine Budget process which is a planning process in project cost management.'
      },

      {
        question: 'The cost baseline or project budget is developed in the Determine Budget process which is a planning process in project cost management.',
        a: 'The critical path always has zero total float, and it shows the earliest possible time to complete the project',
        b: 'The critical path can have zero, positive, or negative float. A project can have only one critical path',
        c: 'The critical path consumes the biggest portion of the project budget compared to other paths',
        correct: 'B',
        explanation: 'The critical path can have negative total float in the case that there is a constraint set on the project finish date or positive float in the case where the project is ahead of schedule. Typically, however, the critical path has zero float.'
      },
      {
        question: 'While acquiring your project team you realize that according to the project charter a specific consultant is required to be on your team. This consultant has particular knowledge and your client has dictated that you hire him as a team member. This situation describes which one of the tools and techniques of the Acquire Resources process?',
        a: 'Multicriteria Decision Analysis',
        b: 'Negotiation',
        c: 'Pre-Assignment',
        d: 'Virtual Teams',
        correct: 'C',
        explanation: 'Pre-assignment involves selecting project team members in advance. It occurs when specific people were promised as part of the project proposal, the project is dependent on the expertise of particular persons, or staff assignments are defined within the project charter.'
      },
      {
        question: 'You are assigned as the manager of a huge multi-billion dollar infrastructure project with a time span of 3 years. You are working in the planning process group of your project and currently you are creating the project WBS. Due to lack of information, you decide to create the WBS of the commissioning phase of the project (which is the last phase) in more details later on when you have more information. This approach to creating the WBS is also known as:',
        a: 'Agile planning',
        b: 'Progressive planning',
        c: 'Waterfall planning',
        d: 'Rolling wave planning',
        correct: 'D',
        explanation: 'Rolling wave planning involves planning near-term items in greater detail than those that are further off in time.'
      },
      {
        question: 'Your project is 4 weeks behind schedule and you have been asked to crash the project in order to make up the lost time. The tasks listed in the table below are all on the critical path. Which of the tasks below would you crash?',
        a: 'Tasks C & E',
        b: 'Tasks B & D',
        c: 'Task A',
        d: 'Tasks D & E & F',
        correct: 'A',
        explanation: 'When crashing a project, you will always crash those tasks that have the smallest crash cost. Tasks C & E have the smallest total crash cost (2,000 + 3,500 = 5,500), making them the cheapest option.'
      },
      {
        question: 'You are managing a project and one of your close friends is also a manager at the client organization. During the project execution, your friend asks for changes to be made in the project scope, and with the reasoning that the changes are critical to the success of the project, he asks you to handle them on an informal basis. He argues that if you want to follow the normal change procedures you will lose considerable time. What should you do in this situation?',
        a: 'Explain to the manager that the change should be handled through the formal change management process and it should be documented.',
        b: 'Since what the manager has asked you is unethical you should refuse the changes.',
        c: 'Comply with the manager’s request since it is critical to the project success.',
        d: 'Perform the changes according to the manager’s request because they are crucial to the project success, but document them later on when the project is on track and there are no more changes to be made.',
        correct: 'A',
        explanation: 'The correct response is to explain to the manager that you would need to formally document these changes as part of a project scope change and put it through the change management process. Complying with the manager’s request is incorrect and violates the code of ethics and professional responsibility towards your organization. Refusing to take up the changes may be too drastic a step.'
      },
      {
        question: 'As a project manager, you are using a fishbone diagram to find the potential risks on your project. Which process are you in?',
        a: 'Plan Risk Response',
        b: 'Control Quality',
        c: 'Perform Qualitative Risk Analysis',
        d: 'Identify Risk',
        correct: 'D',
        explanation: 'A fishbone diagram (also called cause and effect analysis or Ishikawa diagram) is used in the Identify Risks process to determine the potential risks that might affect the project.'
      },
      {
        question: 'As a project manager, you are currently involved in a Close Project or Phase process. In this situation which one of the following activities might possibly be unnecessary?',
        a: 'Finalizing all activities across all of the Project Management Process Groups.',
        b: 'Measuring the project scope against the project management plan.',
        c: 'Performing activities such as finalizing open claims, updating procurement records to reflect final results, and archiving such information for future use.',
        d: 'If a project is terminated before completion, starting procedures to investigate and document the reasons for this early termination.',
        correct: 'C',
        explanation: 'Closing out a contract involves administrative activities such as finalizing open claims, updating records to reflect final results, and archiving such information for future use. Procurement Close could be done at any stage of the project and is not associated only with Close Project or Phase process.'
      },
      {
        question: 'You are the construction project manager of an important stadium which is going to be used for the Winter Olympics. The games start a month from now, and your project has faced some weather delays in pouring the concrete for the landscaping. You know that bad weather might affect the quality of the concrete, however since the deadline is closing you decide to not delay the project anymore and go ahead with the remaining concrete work. Which risk strategy are you undertaking?',
        a: 'Transfer',
        b: 'Exploit',
        c: 'Mitigate',
        d: 'Accept',
        correct: 'D',
        explanation: 'In this situation, you are taking the Acceptance strategy. Acceptance is adopted when there is no possibility to eliminate all threats from a project. This means the project team has decided not to change the project management plan to deal with a risk or is unable to identify a response strategy. This strategy can be active or passive acceptance. Passive Acceptance: No action except documenting the strategy and leave the project team to deal with the risks as they occur. Active Acceptance: Establish a contingency reserve (time/money/resources).'
      },
      {
        question: 'Rhonda is an IT Manager responsible for an important new project. The stakeholders are encouraging her to use Scrum; however, her team doesn’t have experience with it. What is the most important cultural factor Rhonda should ensure is in place for a successful change to this method?',
        a: 'A safe and transparent environment',
        b: 'A focus on speed over stability',
        c: 'An emphasis on flexibility over predictability',
        d: 'An atmosphere that encourages execution over exploration',
        correct: 'A',
        explanation: 'While speed and flexibility are important qualities for an agile project, the most important cultural norm for change is a safe, honest, and transparent environment. Encouraging execution over exploration is more indicative of an environment suited towards predictive methods.'
      },
      {
        question: 'Tom is managing a software development project in a large IT firm. According to the project essential requirements, he has written an email to one of the functional managers and requested a number of staff to be assigned to his project on a permanent basis for a 2-week period. The functional manager has rejected Tom’s request. What should Tom do in this situation?',
        a: 'Raise the issue to higher level managers who can decide on project priorities',
        b: 'Change the sequence of activities so that he can cope with the resource limitations',
        c: 'Record this as a risk in the risk register',
        d: 'Negotiate with the functional manager',
        correct: 'D',
        explanation: 'Tom as the project manager has the ultimate responsibility of acquiring the resources on time. In this situation, he should use the negotiation tools and techniques to acquire the project team. Of course, other items might also be correct in some situations, but the first most responsible way is to do negotiation with the functional managers.'
      },
      {
        question: 'You are managing a residential building construction project. Your client has just requested a change in the lighting system which may increase project risk and costs. What should be your first action?',
        a: 'Raise the issue to the project sponsor',
        b: 'Issue a Change Request',
        c: 'Update the project risk register',
        d: 'Analyze the impacts of the change',
        correct: 'D',
        explanation: 'The first action after receiving any change request is to analyze the impacts. Then, after comparing the impacts to the plan, you may need to issue a change request to modify the project scope. Raising the issue to the project sponsor is also possible once you are aware of the impacts of the change.'
      },
      {
        question: 'For the purpose of recording project lessons learned, you are analyzing the major delay in the project schedule. The root cause of the delay was a demonstration done by a group of green initiative supporters. They were unhappy because their representatives were not informed about all of the arrangements that you are taking to protect the environment. What could you and your team have done better to prevent this from happening?',
        a: 'A more accurate risk response planning',
        b: 'A more accurate stakeholder identification',
        c: 'A clearer communication management plan',
        d: 'A better project management plan',
        correct: 'B',
        explanation: 'Identifying stakeholders and understanding their relative degree of influence on a project is critical. Failure to do so can extend the timeline and raise costs substantially. An important part of a project manager’s responsibility is to manage stakeholder expectations and develop a strategy to keep them satisfied.'
      },
      {
        question: 'In the Plan Quality Management process, which of the following is not attributable to the cost of non-conformance?',
        a: 'Rework',
        b: 'Quality measures',
        c: 'Warranty',
        d: 'Downtime',
        correct: 'B',
        explanation: 'Quality measures are not an attribute of the cost of non-conformance. The cost of non-conformance results in some kind of loss or rejection of the project’s output.'
      },
      {
        question: 'Categorizing identified stakeholders can assist the project team in building valuable relationships with these stakeholders as the project progresses. All of the following techniques are useful for this purpose except for',
        a: 'Stakeholder cube',
        b: 'Stakeholder engagement assessment matrix (SEAM)',
        c: 'Salience model',
        d: 'Power/Interest grid',
        correct: 'B',
        explanation: 'Stakeholder cube, the Salience model, and the Power/Interest grid are stakeholder mapping and categorization techniques and are used in the Identify Stakeholders process. Stakeholder engagement assessment matrix allows the team to analyze the variance between what the existing and desired engagement levels of the stakeholders are and is used in Plan Stakeholder Engagement.'
      },
      {
        question: 'Your company has a new product concept to replace its standalone customer relationship management software with a cloud-based version that has a number of new attractive features. The project is approximately two months underway, and you are receiving complaints from some of the team members that the information they need is not being readily shared by several of the team. Some of this information involves knowledge from past projects regarding how the old products were architected. What would be the most helpful action for you to take that will improve this situation?',
        a: 'Ask the more experienced team members to document their knowledge on the past products and then pass out a copy to the project team.',
        b: 'Ask the team to work out the situation on their own and then check back if they do not make progress.',
        c: 'Speak to the team members who are not sharing information and emphasize the importance of sharing.',
        d: 'Facilitate an in-person workshop event that allows team members to get to know each other and where you can present the vision and expectations for the project.',
        correct: 'D',
        explanation: 'Asking team members to write documentation on past products is an inefficient way to attain information. Asking team members to handle it on their own will likely not be successful since their reporting of the issue to you is an indication that this has not worked so far. Speaking to the team members who are not sharing the information may be necessary at some point. However, the most important action for you now is to attempt to improve the culture. Informal and face-to-face interaction is the best way to begin to build trust so that people will be more willing to share information. Additionally, emphasizing the objectives and need for the project reinforces the shared vision that you are attempting to align everyone around.'
      },
      {
        question: 'You are managing a small project in the context of a large organization. A strategic decision made in the organization was to shut down one of the operation units which was supposed to work a few days for your project. This might lead to missing a major milestone in your project so you need to do the required planning to acquire outside resources to get your project activity done. Which tools and techniques of the Plan Risk Response process will help you in this situation?',
        a: 'Strategies for positive risks or opportunities',
        b: 'Strategies for negative risks or threats',
        c: 'Contingent response strategies',
        d: 'Risk Reassessment',
        correct: 'C',
        explanation: 'This is the situation where the risk response happens after the trigger which is the sudden shut down of an operational unit in the company. Some responses are designed to use only if a specific event occurs. It is appropriate for the project team to make a response plan that will be executed only under certain predefined conditions (triggers like missing intermediate milestones). The risk response occurs BEFORE the risk and tries to alter the probability and/or impact while the contingency plan only occurs AFTER the trigger (usually the risk event) and focuses only on changing the impact.'
      },
      {
        question: 'A project manager recently assessed the team’s performance using earned value metrics and found that the rate of deliverable completion has slowed. After some investigating, he determined that one of the team members is inexperienced in the technique that the team has chosen to develop the software for the current phase of the project. He meets with this team member and suggests that they take a two-day class that others on the team have taken previously. What should the project manager do next?',
        a: 'Check back with the team member to verify whether the training took place and was helpful.',
        b: 'Advise the team member\'s supervisor that the team member was inexperienced and should be mentored.',
        c: 'Ask the client if the schedule can be extended since the project is no longer on pace.',
        d: 'Reassign the team member to tasks they are more familiar with.',
        correct: 'A',
        explanation: 'Checking back with the team member to verify the effectiveness of the training is the most appropriate next step. It is the job of the project manager to not only recommend training opportunities for their team but to ensure that the training was effective.'
      },
      {
        question: 'Projects, by definition, represent change since each one is unique. Some projects represent a greater change to the organization than others, such as when changing a project methodology from a predictive to an adaptive one if it is new to the organization. Fill in the blank regarding the most important cultural norm necessary to create organizational change.',
        a: 'Safe',
        b: 'Need other options',
        c: 'Need other options',
        d: 'Need other options',
        correct: 'A',
        explanation: 'The answer is safe. According to the APG, the most important cultural norm needed is one that enables a safe work environment.'
      },
      {
        question: 'You are managing an airport construction company. In the middle of the project you realize that one of the subcontractors is not meeting the quality requirements as stipulated in their contract. This is a risk that may result in the final product of the project being rejected by your client. What is your first course of action?',
        a: 'Initiate a change request',
        b: 'Perform claim administration',
        c: 'Perform inspection & audit',
        d: 'Raise the risk to the Sponsor',
        correct: 'C',
        explanation: 'According to the PMBOK® Guide (6th Edition), inspections and audits required by the buyer and supported by the seller as specified in the procurement contract can be conducted during execution of the project to verify compliance in the seller’s work processes or deliverable. If authorized by contract, some inspection and audit teams can include buyer procurement personnel.'
      },
      {
        question: 'You are in charge of performing the financial analysis for a troubled project in your company. The project is currently on hold and based on the results of your work, top management will decide on continuing or dropping the project. Which category of costs should you not consider in your analysis?',
        a: 'Indirect costs',
        b: 'Fixed Costs',
        c: 'Variable Costs',
        d: 'Sunk Costs',
        correct: 'D',
        explanation: 'Sunk costs are the costs that are expended in the past. Sunk costs should not be considered when deciding on continuing a project.'
      },
      {
        question: 'As a project manager in a large organization with various projects similar to yours, you are responsible to report the project status to the top management in a way that quickly and easily gives them the required information. Which one of the following is the best type of report to provide the required information to senior management?',
        a: 'Project management plans',
        b: 'Project detailed schedules',
        c: 'Gantt Charts',
        d: 'Milestone reports',
        correct: 'D',
        explanation: 'The only report that best suits the needs of senior management is the milestone report. The rest of the mentioned documents include a lot of redundant or detailed information for this purpose.'
      },
      {
        question: 'Which of these is an output from the Acquire Resources process?',
        a: 'Organizational chart',
        b: 'Project team assignments',
        c: 'RAM',
        d: 'Staffing Management Plan',
        correct: 'B',
        explanation: 'After determining elements such as the roles and responsibilities, reviewing recruitment practices, and negotiating for staff, project team members are assigned to project activities as part of the Acquire Resources process.'
      },
      {
        question: 'Which one of the following is not an input to the Develop Project Charter process?',
        a: 'Agreements',
        b: 'Business Case',
        c: 'Stakeholders Register',
        d: 'Organizational Process Assets',
        correct: 'C',
        explanation: 'Inputs of the Develop Project Charter process are: Business Case, Agreements, Enterprise Environmental Factors, Organizational Process Assets'
      },
      {
        question: 'As a project manager, you are using root cause analysis to determine what the potential risks might be in your project. Which process best describes the process in which you are involved?',
        a: 'Plan Quality',
        b: 'Identify Risks',
        c: 'Control Quality',
        d: 'Plan Risk Responses',
        correct: 'B',
        explanation: 'You are in the Identify Risks process because root cause analysis tools can help identify potential threats based on past experience of issues experienced. Root cause analysis is used in both quality management and risk management. However, the situation explained in this question refers only to the information gathering techniques of the Identify Risks process.'
      },
      {
        question: 'You are a construction project manager. In a formal project management training you are told that you need to collect information on contract schedule, scope, quality, and cost performance along with all contract change documentation, payment records, and inspection results. You are also told by your instructor that this information can be used for lessons learned and as a basis for evaluating contractors for future contracts. Which document is your instructor talking about?',
        a: 'Claims Administration',
        b: 'Close Project or Phase',
        c: 'Inspections and Audits updates',
        d: 'Procurement Documentation',
        correct: 'D',
        explanation: 'According to the PMBOK® Guide (6th Edition), to close the contract, all procurement documentation is collected, indexed, and filed. Information on contract schedule, scope, quality, and cost performance along with all contract change documentation, payment records, and inspection results are cataloged. This information can be used for lessons learned and as a basis for evaluating contractors for future contracts.'
      },
      {
        question: 'You have just been assigned to the photo transfer project. You are beginning to meet with the stakeholders and have made some observations. You notice that the team of seven software developers has been given quite a bit of autonomy in how they conduct their work. The sponsor is pleased with the work so far, as is the business representative, who has been giving the team regular feedback on their deliverables. What methodology is the team most likely following?',
        a: 'Adaptive',
        b: 'Predictive',
        c: 'Hybrid',
        d: 'Waterfall',
        correct: 'A',
        explanation: 'Small autonomous teams that have earned the trust of project stakeholders are characteristics of an adaptive culture. The fact that the team is receiving regular feedback is another clue that an iterative, incremental lifecycle is likely being followed.'
      },
      {
        question: 'You are several weeks into a new project, which is one of the most visible ones in the company. You are still getting the lay of the land and meeting with various stakeholders that include suppliers, customers, functional managers, and individual contributors. At some of these meetings, you are beginning to hear talk that not everyone is pleased that this project is taking place and is being given such high priority. You realize you have some tools that might assist you in fleshing out this problem. Which one would be most appropriate for you to use?',
        a: 'The use of surveys to get feedback.',
        b: 'The stakeholder engagement assessment matrix.',
        c: 'The use of ground rules.',
        d: 'Preparing and delivering a PowerPoint presentation to all the stakeholders on the benefits of the project.',
        correct: 'B',
        explanation: 'The Stakeholder engagement assessment matrix (SEAM) enables you to plot whether stakeholders are resistant, neutral, supporting, or leading in their attitude towards the project. Based on where you would like each of these stakeholders to be, you can plot strategies to gain their support. Not every stakeholder will require a strategy, so it is important to plot where each is desired to be.'
      },
      {
        question: 'According to the latest update of the project schedule, you realize that the project will be completed one month after the desired completion date. You have extra resources on hand and the activity dependencies are preferential. The project is not of high risk and the SPI up to now is 0.89. As a project manager, what would be your best course of action under these circumstances?',
        a: 'Make more activities concurrent',
        b: 'Leveling the resources',
        c: 'Shift some of the resources from the preferential dependencies to the external ones',
        d: 'Eliminate some of the activities which are of lower importance',
        correct: 'A',
        explanation: 'Leveling the resources would generally increase the project duration. Removing the activities under some conditions and using the project change process (discretionary dependency) might be possible but considering that dependencies are preferential and you have extra resources the first thing could be to make more activities concurrent.'
      },
      {
        question: 'Conflicts are common and unavoidable in projects. Which of following are the three most common sources of conflicts in projects?',
        a: 'Schedules, Cost, Resources',
        b: 'Schedules, Project priorities, Resources',
        c: 'Cost, Resources, Personalities',
        d: 'Project priorities, Resources, Cost',
        correct: 'B',
        explanation: 'Conflict can come from seven main sources, of which the first three account for 50%: 1. Schedules, 2. Project priorities, 3. Manpower/human resource availability, 4. Technical opinions, 5. Procedural or project administration, 6. Costs, 7. Personalities'
      },
      {
        question: 'As the manager of a highly critical project, you walk into your office and receive a phone call from your client notifying you that they need an urgent review meeting about the delay that occurred in the delivery of one of the major pieces of equipment for the project. You open your e-mail and you get bombarded with the emails coming from two of your team about a conflict that started between them this morning. After a few minutes you get a phone call from one of them while the other one shows up at your office. Which conflict resolution technique would you use immediately?',
        a: 'Collaborating',
        b: 'Forcing',
        c: 'Compromising',
        d: 'Smoothing',
        correct: 'D',
        explanation: 'Collaborating or problem solving is the best way to resolve conflict but not in this situation. Since you should choose a technique to deal with the conflict immediately and it’s explained that there is an urgent meeting on an important issue in your critical project that you that you need to take care of, the best method in this situation would be to delay the conflict resolution, i.e. smoothing.'
      },      
      {
        question: 'You have recently been assigned as the manager of a highly critical national project which should be finished in a very short period of time compared to the similar projects. After developing the first draft of the project network diagram you see that the project cannot be finished on time. If the network diagram cannot be changed anymore and you have extra human resources, what would be the best approach?',
        a: 'Fast tracking',
        b: 'Crashing',
        c: 'Risk analysis',
        d: 'Leveling the resources',
        correct: 'B',
        explanation: 'In this situation, leveling the resources will generally increase the duration. Since the network diagram cannot be changed, the fast tracking option is also not feasible. So crashing remains as the best option in this situation to decrease the duration.'
      },
      {
        question: 'You have just been hired as the project manager in a large company and given the approved project charter. You know that your company always undertakes very challenging projects and your project is not an exception. What should be your first course of action?',
        a: 'Plan risk management',
        b: 'Confirm that all of the stakeholders have contributed to the scope',
        c: 'Identify project risks',
        d: 'Start developing project management plan',
        correct: 'B',
        explanation: 'Read the question carefully. You as the project manager have not been involved in the project charter development, therefore it is your responsibility to make sure that the charter is complete and all of the stakeholders have their inputs in it before proceeding with the next step in project planning.'
      },
      {
        question: 'As the manager of a large project, including a huge part of procurement activities, you are about to start project closure activities. All final deliverable of the project are validated. What should be your first step in project closure?',
        a: 'Start closing out contracts',
        b: 'Ensure completion of scope as per Project Management Plan',
        c: 'Start Claims Administration',
        d: 'Start Administrative Closure',
        correct: 'B',
        explanation: 'According to the PMBOK® Guide (6th Edition), when closing the project the project manager must review all the prior information from the previous phase closure to ensure that all project work is completed and that the project has met its objectives. Since project scope is measured against the scope management plan, the project manager reviews the scope baseline (part of the project management plan) to ensure completion before considering the project closed.'
      },
      {
        question: 'You are managing a project which is facing some minor delays in the submission of a few project deliverables. You have been asked to a meeting with the team members in charge of the delayed deliverables. Which one of the following tools do you think is the best to be used during the meeting to show the project schedule status to the responsible team members?',
        a: 'Gantt Chart',
        b: 'Project Network Diagram',
        c: 'Milestone Chart',
        d: 'Responsibility Assignment Matrix',
        correct: 'A',
        explanation: 'In a meeting with team members you need a tool which shows the schedule details such as delays, completion, and timeline.'
      },
      {
        question: 'Which one of the following items determines the acceptable range of variation of a process on a control chart?',
        a: 'Mean',
        b: 'Upper and Lower Control Limits',
        c: 'Standard Deviation',
        d: 'Specification Limit',
        correct: 'B',
        explanation: 'The control limits are set based on the company’s quality standard and indicate the acceptable range. Upper and lower control limits are usually set at +/− 3sigma.'
      },
      {
        question: 'Which technique is not a helpful practice in creating cultural compatibility for an agile approach?',
        a: 'Active executive sponsorship',
        b: 'Management adjusting how team members are assessed',
        c: 'A focus on getting things right the first time',
        d: 'A focus on going fast but not hurrying.',
        correct: 'C',
        explanation: 'A focus on getting things right the first time fits with a plan-driven rather than a change-driven approach. The other answer choices describe helpful strategies in an Agile project approach. Agile work should occur at a manageable pace.'
      },
      {
        question: 'You have recently been assigned as the manager of a project after the previous manager quit the company. From the first meetings with the project team you discover that the morale of the team is very low. You speak to some of the team members in private and you feel that they were not given opportunities to participate in team development activities and that they did not have opportunities to grow. Which of the following is a primary factor for this situation?',
        a: 'Use of zero-sum rewards in the project',
        b: 'A poorly defined resource calendar',
        c: 'Too many hierarchical levels in the project organization chart',
        d: 'Poor communication planning',
        correct: 'B',
        explanation: 'According to the PMBOK® Guide (6th Edition), resource calendars identify times when the project team members can participate in team development activities. If the team members are unable to find time for such activities, it is likely that the calendar has been poorly planned out.'
      },
      {
        question: 'You are a junior project manager, currently performing schedule controlling activities. You approach one of your experienced colleagues for advice on how to reanalyze the project and predict the project’s remaining duration. She tells you to analyze the sequence of activities with the least amount of scheduling flexibility. Which technique is she referring to?',
        a: 'Gantt chart',
        b: 'Critical path method',
        c: 'Resource leveling',
        d: 'Precedence diagramming method',
        correct: 'B',
        explanation: 'The Gantt chart is only a representation of the project schedule, not an analysis method. The precedence diagramming method is a diagramming technique that deals with the relationship between activities, not schedule flexibility. Resource leveling is used to smooth the use of the resources over a period of time. The only option that deals with schedule flexibility is the critical path method which uses activity floats.'
      },
      {
        question: 'Tom is managing a project and he has scheduled a number of training programs for his team. However, he knows that apart from planned training, unplanned training also takes place in a number of ways. Which of these is not one of the ways in which unplanned training can happen?',
        a: 'Conversation',
        b: 'Online',
        c: 'Observation',
        d: 'Project performance appraisals',
        correct: 'B',
        explanation: 'According to the PMBOK® Guide (6th Edition), scheduled training occurs as stated in the Human Resource plan and could include online, classroom, on-the-job, etc. Unplanned training, however, takes place through conversation, observation and project performance appraisals conducted during the controlling process of managing the project team.'
      },
      {
        question: 'As the project manager, you are reviewing the control chart related to one of the project deliverables, and you find seven data points in a row on one side of the mean. What should be your next action?',
        a: 'According to the rule of seven this is normal and no action is required',
        b: 'Modify the mean',
        c: 'Perform the quality measurements again to make sure about the data points correctness',
        d: 'Find an assignable cause',
        correct: 'D',
        explanation: 'This is an example of the application of the rule of seven in control charts. If you have seven data points in a row on the same side of the mean, statistically the mean has shifted, calling for action to correct the problem. Therefore, the first action is to find the cause of the errors.'
      },
      {
        question: 'As the manager of a large construction project you are currently conducting a meeting with the project management team to decide on a procurement contract. There are opposing views among the team members on the type of contract that best suits your situation. Which one of the following types of contracts have the most cost risk for your organization as a buyer?',
        a: 'Cost plus percentage of costs',
        b: 'Fixed price incentive fee',
        c: 'Time and materials',
        d: 'Cost plus award fee',
        correct: 'A',
        explanation: 'In a cost plus percentage of costs contract, the buyer pays all costs while the costs are not limited. In a fixed price type of contract, the buyer has the least cost risk, as any cost overruns are borne by the seller.'
      },
      {
        question: 'As a project manager you are approached by one of the project stakeholders asking for a change in the project work breakdown structure. The stakeholder brings enough reasons to show that the change does not affect the project time or cost. What is the best action for you in this situation?',
        a: 'Ignore the change and ask the stakeholder to formally request a change',
        b: 'Since there are no time and cost effects, implement the change',
        c: 'Raise the change to your management',
        d: 'Look for other impacts that the change may have',
        correct: 'D',
        explanation: 'Even though it may not directly affect the time or cost of the project, you need to look at all the impacts of a change on other project constraints. The change may increase risk, reduce quality, etc. As a project manager the best thing to do is to know all of the impacts of a change before taking any other action.'
      },
      {
        question: 'As a project manager, Tom is currently involved in the Control Procurements process. According to the records, one of the vendors has not delivered the items on time. The root-cause analysis shows that the problem was in the proposal evaluation activities that could have been done more accurately. What should Tom do at this point?',
        a: 'Update Procurement Documentation',
        b: 'Update Organizational Process Assets',
        c: 'Conduct Procurement Audits',
        d: 'Update Procurement Contracts',
        correct: 'B',
        explanation: 'Lessons learned are a part of Organizational Process Assets. The Project Manager should update this with the procurement experience so that future projects can benefit. Organizational Process Assets Updates are an output of Control Procurements.'
      },
      {
        question: 'All of the followings are examples of the cost of nonconformance except?',
        a: 'Warranty costs',
        b: 'Rework',
        c: 'Inspection',
        d: 'Penalties',
        correct: 'C',
        explanation: 'Costs of non-conformance are costs incurred when a project fails to meet the required level of quality. Failure costs are also called costs of poor quality. Costs of non-conformance are categorized into 2 groups: 1.) Internal failure costs — Before releasing product to customer. Includes costs to rework, fix defects, wastage due to internal errors, and unnecessary advertising. 2.) External failure costs — After releasing product to customer. Liability and penalties cost, warranty costs, cost of developing and distributing fix, support calls, and damage control costs.'
      },
      {
        question: 'As a project manager of a challenging software development project, you are in the middle of project execution when one of your team members approaches you and notifies you about a problem that has just happened and that was not included in the risk register. What would be your first action in this situation?',
        a: 'Inform your management',
        b: 'Add this problem to the project risk register',
        c: 'Create a workaround',
        d: 'Redo the Identify Risks process to find out other risks which might have been neglected',
        correct: 'C',
        explanation: 'Since this is a problem that has occurred and not a risk, there’s no need to add it to the risk register. The Identify Risks process will need to be redone, but since this is a problem, the first action is to come up with a solution for it. Creating a workaround is a solution. You might need to inform management as well, but this is reactive, not proactive, and not the first thing you should do.'
      },
      {
        question: 'You are assigned as the manager of a construction project and the project sponsor has provided you with a draft project charter and immediately asks you to provide a preliminary analysis of the risks on the project. Which of the following would BEST help this effort?',
        a: 'Resource plan from the project planning process',
        b: 'Project scope statement from the project planning process',
        c: 'A conversation with a team member from a similar project that failed in the past',
        d: 'An article from PM Network Magazine',
        correct: 'C',
        explanation: 'Since the only document that you have is the project charter, you are still in the project initiating phase and none of the planning documents have been generated yet. So the project scope statement and the resource plan are not correct answers. The magazine article could be correct if it was mentioned that the article gives some applicable insights, particularly about the risks involved in your project.'
      },
      {
        question: 'You are asked by your management to provide an estimation of the costs of a new residential building project using the costs of an earlier residential building project that your company had carried out as the basis for your estimation. What type of estimation is this called?',
        a: 'Analogous Estimating',
        b: 'Bottom-up Estimating',
        c: 'Activity-based Estimating',
        d: 'Parametric Estimating',
        correct: 'A',
        explanation: 'According to the PMBOK® Guide (6th Edition), analogous estimating is a technique for estimating the duration or cost of an activity or a project using historical data from a similar activity or project.'
      },
      {
        question: 'A project manager is performing Reserve Analysis as a technique in one of the project management processes that he is currently working on. Which of these is likely to be that process?',
        a: 'Estimate Reserves',
        b: 'Plan Costs',
        c: 'Determine Budget',
        d: 'Develop Schedule',
        correct: 'C',
        explanation: 'Reserve Analysis is one of the techniques which is used in more than one process. Three processes of Estimate Costs, Determine Budget, and Control Costs are the Cost Management processes that use this tool.'
      },
      {
        question: 'Knowledge management involves the recording and transferring of experiences and skills to the organization in order to achieve project objectives. Both explicit and tacit knowledge are important for this purpose. One of the advantages of tacit knowledge is that',
        a: 'It is open to interpretation',
        b: 'It can be readily shared',
        c: 'It can be readily codified',
        d: 'It has context built in',
        correct: 'D',
        explanation: 'Tacit knowledge, which is the information and belief system a team member has within their minds and realm of experience, is not documented or codified and must be drawn out by others in order to utilize that knowledge. Therefore, unlike explicit knowledge, which is written down, it is more difficult to share. However, unlike explicit knowledge, which lacks context and can therefore be open to interpretation, tacit knowledge has context built into it. Refer to section 4.4 of the PMBOK® Guide for additional info.'
      },
      {
        question: 'As a software development project manager, you are approached by one of the software developers telling you that he has added additional features to the end product which were not required in the scope. He also mentions that adding those features did not take any extra time or cost. What should be your action in this situation?',
        a: 'Carefully review and understand the new features',
        b: 'Implement change control process',
        c: 'Ask the software developer to remove the extra features',
        d: 'Ask the team member to issue a change request for the extra features',
        correct: 'A',
        explanation: 'As the project manager, you are responsible to evaluate the situation before making any decision about the change. This is the first step of the integrated change control. After a complete review of the new features, you can realize the possible impacts of the change in terms of quality, risk, etc.'
      },
      {
        question: 'Your team is involved in selecting a seller for one of the important systems of the project. Two of your team members have a conflict over selecting the seller. One of them believes that you should choose company X while the other argues that company Y should be awarded the contract. Which one of the following will you refer the team to make the decision?',
        a: 'Seller proposals',
        b: 'Source selection criteria',
        c: 'Project management plan',
        d: 'Procurement documents',
        correct: 'B',
        explanation: 'The source selection criteria are the primary tools for evaluating potential sellers and should be used by the entire team in order to make a selection.'
      },
      {
        question: 'You are managing a project which is suffering many changes since the initiation. You had to process a lot of changes and you did not have enough time to do anything else. Which one of the followings best describes what you should do in such a project?',
        a: 'Determine if changes are needed. Notify the stakeholders who are affected by the changes and list all of the changes in the scope management plan.',
        b: 'Determine whether the changes are needed and whether they are beneficial to the project. List all of the changes in the scope management plan.',
        c: 'List all of the changes in the project charter, notify the project stakeholders who are affected by the changes and ensure that you have their sign off on the changes.',
        d: 'Determine whether a change is needed and whether it is beneficial to the project, and notify the stakeholders who are affected by the change.',
        correct: 'D',
        explanation: 'You never list changes in the scope management plan or in the project charter. As the project manager you need to make sure that changes are needed and beneficial and also to make sure that the stakeholders get notified.'
      },
      {
        question: 'You are a software development project manager and currently you are in the process of developing the project risk management plan. Which of the following is not part of such a plan?',
        a: 'Risk probability',
        b: 'Methodology',
        c: 'Risk categories',
        d: 'Impact Matrix',
        correct: 'A',
        explanation: 'The contents of the risk management plan according to the PMBOK® Guide (6th Edition) are methodology, roles & responsibilities, budgeting, risk categories, definition of risk probabilities and impacts, probability & impact matrix, revised stakeholders tolerances, reporting formats, and tracking. Basically, the risk management plan describes how risk management will be structured and performed on the project. It does not identify individual risks or the probability of their occurrence.'
      },
      {
        question: 'You have just been assigned to manage a new change-driven project to create a website for one of the company’s best customers. Your team of five is experienced with this project approach and with the customer, although they are starting on the same day as you are. Based on your expertise, what would be the best leadership style you should employ with the team?',
        a: 'Directing',
        b: 'Laissez-Faire',
        c: 'Servant Leader',
        d: 'Coordinator',
        correct: 'C',
        explanation: 'Servant Leadership is the best approach for a change-driven project and when the team is experienced. They can be best served by your ability to remove obstacles for them and play interference with other managers and potential distractions.'
      },
      {
        question: 'You are managing a software development project budgeted at $360,000 according to the earned value analysis report which you have on your desk. As of today, you have spent $110,000, and the earned value is $120,000. According to your earned value figures, your SPI is 0.8. Which one of the following options best describes your project status?',
        a: 'Not enough information',
        b: 'On schedule',
        c: 'Behind schedule',
        d: 'Over budget',
        correct: 'A',
        explanation: 'EV= $120,000, AC= $110,000, PV= $150,000, SPI= EV/PV, SPI= 120,000/150,000, SPI= 0.8, Since SPI is less than 1, we can conclude the project is behind schedule.'
      },
      {
        question: 'Tom is a project manager managing a bridge construction project for the first time. He has set up a series of interviews with various stakeholders to gather some experiential and historical information on some of the risks. Which process is Tom most probably involved in?',
        a: 'Perform Quantitative Risk Analysis',
        b: 'Plan Risk Responses',
        c: 'Identify Risks',
        d: 'Perform Qualitative Risk Analysis',
        correct: 'D',
        explanation: 'Such meetings or interviews are usually done as part of Qualitative Risk Analysis. This method draws on experiential learning and historical data to quantify the impact of risks on project objectives. Read the question carefully. It mentioned that the purpose of the interviews is to gather information about some risks, not to discover some risks.'
      },
      {
        question: 'Which of the following project management processes covers formal completion and handover of the final product/service?',
        a: 'Close Project or Phase',
        b: 'Control Procurements',
        c: 'Validate Scope',
        d: 'Contract administration',
        correct: 'A',
        explanation: 'Close Project or Phase is the process of finalizing all activities across all of the Project Management Process Groups to formally complete the project or phase.'
      },
      {
        question: 'The project charter provides the project manager with some benefits and information. Which one of the following is most important for the project manager?',
        a: 'Project authority',
        b: 'The formal role of "Project Manager"',
        c: 'The project sponsors list',
        d: 'High-level project scope',
        correct: 'A',
        explanation: 'The project charter formally authorizes the existence of a project, and provides the project manager with the authority.'
      },
      {
        question: 'Which one of the following statements is correct?',
        a: 'Validate scope is primarily concerned with correctness of deliverables.',
        b: 'Control quality is primarily concerned with acceptance of the deliverables.',
        c: 'Validation of scope can only be done at the end of the project.',
        d: 'Control quality is generally performed before scope validation, but these two can be performed in parallel.',
        correct: 'D',
        explanation: 'Validate scope is primarily concerned with acceptance of deliverables while control quality is primarily concerned with the correctness of the deliverables. Control quality is generally performed before scope validation, but these two can be performed in parallel. Validate scope can be done at the end of each project phase in the project life cycle and at other points throughout the project as part of M&C, i.e., validate scope is done multiple times in the project.'
      },
      {
        question: 'What is the most appropriate guideline for managing documentation artifacts at the start of your agile project?',
        a: 'Ensure that there is sufficient detail on the user stories in the sprint backlog so that work can begin.',
        b: 'Ensure that there is sufficient detail for each user story in the product backlog so that work can begin.',
        c: 'Ensure that each user story for the project has been reflected in the product backlog.',
        d: 'Ensure that there is sufficient detail for each user story so that each is roughly equivalent in size.',
        correct: 'A',
        explanation: 'The best guideline is to ensure that there is sufficient detail on the user stories in the sprint backlog so that work can begin. User stories for the entire project do not need to be created nor described in detail for work to begin. Only those user stories that will be in the next iteration require sufficient detail. User stories do not need to be similar in size.'
      },
      {
        question: 'What is the critical path with reference to the following network diagram?',
        a: 'B-C-E-F',
        b: 'A-D-F',
        c: 'A-D-E-F',
        d: 'B-C-D-F',
        correct: 'D',
        explanation: 'There are 3 different paths in the diagram and we can calculate their duration as: A-D-F = 4 + 10 + 8 = 22 days, B-C-E-F = 5 + 7 + 8 + 8 = 28 days, B-C-D-F = 5 + 7 + 10 + 8 = 30 days. Among the above mentioned paths, B-C-D-F has the longest duration. A-D-E-F which is mentioned as an answer choice is not actually a complete path because activity D is not a predecessor of activity E.'
      },
      {
        question: 'Which one the following is not a benefit of quality audits?',
        a: 'Creating quality metrics',
        b: 'Identify all nonconformities, gaps, and shortcomings',
        c: 'Identify all good and best practices being implemented',
        d: 'Confirm the implementation of approved change requests',
        correct: 'A',
        explanation: 'Quality metrics are an output of the Plan Quality process and an input to the Manage Quality process. The other choices are all benefits of quality audits.'
      },
      {
        question: 'Tom is a construction project manager and recently approached an insurance company to insure the project against the possible damages of storms that are predicted to happen in the winter. Which risk response strategy is Tom undertaking?',
        a: 'Avoid',
        b: 'Accept',
        c: 'Mitigate',
        d: 'Transfer',
        correct: 'D',
        explanation: 'Risk Transference is a risk response strategy that shifts the impact of a threat to a third party, together with ownership of the response. Taking out insurance or a warranty transfers the risk from the owner to the other party.'
      },
      {
        question: 'Your project team developed a team charter at the start of the project, which is now midway to completion. The charter included a list of ground rules involving decision-making, meeting etiquette, and interpersonal behavior. At a recent meeting, one of the team members began to belittle the idea of another member, causing a heated discussion and everyone leaving the meeting. As the project manager, what should you do?',
        a: 'Meet with the team member who caused the disruption and advise them that this behavior was not appropriate.',
        b: 'Call another meeting to continue the topics on the agenda.',
        c: 'Tell the supervisor of the disruptive employee that he is negatively impacting the project.',
        d: 'Remind the team that they have a team charter and allow them to work the issue out.',
        correct: 'D',
        explanation: 'This question is about accountability. A team charter that is created by the team means that the team is accountable for enforcing it. They may need a reminder that this is the purpose of the charter, and they need to be trusted to hold themselves to it.'
      },
      {
        question: 'You are managing a project with a lot of different detailed activities. The project is within budget and the SPI according to the latest earned value report is 1.2. The project risk review meetings are held according to an organized schedule and you are satisfied with the risk management activities of the project. However, you get notified by two different stakeholders that some of the project status reports are not accurate. Which tool will you use to verify whether there is a problem?',
        a: 'Root-cause analysis',
        b: 'Inspection',
        c: 'Observations',
        d: 'Quality audits',
        correct: 'D',
        explanation: 'According to the PMBOK® Guide (6th Edition), a quality audit is a structured, independent process to determine if project activities comply with organizational and project policies, processes, and procedures. In this specific case you need to do quality audits to make sure that your team is doing the project reporting in accordance with the project policies and standards.'
      },
      {
        question: 'Which one of the following is not an input to the initiating process group?',
        a: 'Historical project schedules',
        b: 'Lessons learned database',
        c: 'Project scope statement',
        d: 'Company culture',
        correct: 'C',
        explanation: 'The project scope statement is an output of the planning process group, so it cannot be available as an input to the initiating process group. The other options are among the Enterprise Environmental Factors or Organizational Process Assets which are inputs of the initiating process group.'
      },
      {
        question: 'You are manager of a project and after a periodic project schedule update, the scheduler working on your team comes to you with the following list of activities. He also mentions that the project is faced with 2 weeks of delay and as a corrective action he proposes to change the sequence and perform activity H concurrent with activity G, instead of after it. What would be your reaction?',
        a: 'This will help all of the delay to be recovered, so accept the proposal',
        b: 'This will help you spend less resources, so accept the proposal',
        c: 'It might affect activity I, so reject the proposal',
        d: 'This does not have any effect on the critical path, so reject the proposal',
        correct: 'D',
        explanation: 'According to the list of activities, activity H has float and is not critical. Therefore, changing its sequence to perform it sooner will not change the project finish date. The best way is to complete the critical activities earlier.'
      },
      {
        question: 'You are managing an IT project for an external client. The project is ahead of schedule and your next activities are testing and hand over. Which one of the followings will you be more concerned about in this situation?',
        a: 'Time schedule',
        b: 'Performing quality control',
        c: 'Generating performance reports',
        d: 'Validate project scope',
        correct: 'D',
        explanation: 'You are close to performing the final product handover to the external client. Scope validation deals with acceptance by the customer. Without this acceptance, you will not be able to move into the next project phase.'
      },
      {
        question: 'As the product owner of an agile social media app project, you noticed that a competitor has just released an exciting new feature for their app. You realize that this feature will be well-received. What action should you take?',
        a: 'Add this feature to the product backlog and reprioritize the product backlog.',
        b: 'Add this feature to the current sprint backlog and reprioritize the sprint backlog.',
        c: 'Create a change request for this feature.',
        d: 'Update the work breakdown structure to include the new feature.',
        correct: 'D',
        explanation: 'Agile projects, such as Scrum, do not utilize a formal change control procedure since doing so would slow the team down. The product owner instead is authorized to approve changes. They would not add this feature to the sprint backlog, however, since the team is already committed to the scope for the current sprint. Therefore, adding the feature to the product backlog and reprioritizing the backlog is the best answer.'
      },
      {
        question: 'A project manager is trying to plan for a contingency reserve as part of the cost estimates for the project. Which of these would be an incorrect way to plan for contingency reserves?',
        a: 'Plan for contingency reserve as a percentage of the estimated cost.',
        b: 'Use quantitative analysis methods to arrive at the contingency reserve.',
        c: 'Start with a zero value for contingency reserve.',
        d: 'Plan for contingency reserve as a fixed number.',
        correct: 'C',
        explanation: 'According to the PMBOK® Guide (6th Edition), the contingency reserve may be a percentage of the estimation, a fixed number, or may be developed by using quantitative analysis methods such as a Monte Carlo simulation. Therefore, it would be incorrect to start with a zero value for contingency reserves.'
      }, 
      {
        question: 'As a project manager you are reviewing a report of the actual cost of the completed work packages. You realize that a few work packages are completed with an actual cost which is substantially lower than their budgeted cost. You will immediately do all of the following actions except?',
        a: 'Try to find ways to increase the actual costs',
        b: 'Make sure that proper resources are utilized',
        c: 'Make sure that the scope is properly done',
        d: 'Make sure about the quality of the work',
        correct: 'A',
        explanation: 'All of the incorrect answer choices refer to possible root causes of a variance in the costs. If any of these proves to be the root cause, then the corrective action might result in increasing the actual costs. However, trying to find ways to increase the actual costs is not the first thing to do.'
      },
      {
        question: 'You are a project manager and your company has just completed an unexpected round of layoffs. Morale is low, and human resources are tighter than ever. Your project is now behind schedule because of the loss of resources. Overtime work will be required of everyone for the next several weeks in order to close the gap. One of the critical resources on your project has an upcoming vacation that was approved and scheduled months ago. However, without this resource you will be unable to get back on schedule. What do you do?',
        a: 'Notify the project stakeholders of the situation immediately',
        b: 'Find another resource',
        c: 'Compress the schedule further',
        d: 'Cancel all vacations',
        correct: 'A',
        explanation: 'An unexpected loss of project resources due to company downsizing that results in a schedule slip must be communicated to project stakeholders immediately. It would be unfair to penalize the resource by cancelling his vacation simply because it is the easiest way to get back on schedule. Finding other resources by the project manager also doesn’t seem to be possible in this situation.'
      },
      {
        question: 'As the project manager you are negotiating a contract with a seller. You want to go in for a fixed price type of contract. Which other terminology could be used to refer to the fixed price type of contract?',
        a: 'Cost-Plus-Fixed-Fee contract',
        b: 'Time and material contract',
        c: 'Lump sum contract',
        d: 'Cost-Plus-Fee contract',
        correct: 'C',
        explanation: 'A fixed price contract is synonymous with a lump sum contract. This type of contract involves a fixed total price, or a lump sum, for a well-defined product.'
      }
      
      
      
      
  ]

/*  {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    correct: '',
    explanation: ''
  },

*/