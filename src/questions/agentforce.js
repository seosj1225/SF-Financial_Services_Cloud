export const AGENTFORCE_QUESTIONS = [
  {
    i: 1,
    q: "Universal Containers would like to route SMS text messages to a service rep from an Agentforce Service Agent.\nWhich Service Channel should the company use in the flow to ensure it's routed properly?",
    o: ["A. Messaging", "B. Route Work Action", "C. Live Agent"],
    a: ["A"],
  },
  {
    i: 2,
    q: 'An Agentforce Specialist is setting up Salesforce Knowledge as the data source for a Data Library and must select "Identifying Fields" to help Agentforce locate the right information. The Knowledge article contents are rich, detailed, and quite long.\nWhat should the Agentforce Specialist use as Identifying Fields?',
    o: [
      "A. The main contents of the article to ensure the most relevant article is used.",
      "B. Any text or text area fields that provide a concise summary of the article.",
      "C. Any standard or custom formula field that contains a suitable concatenated key.",
    ],
    a: ["B"],
  },
  {
    i: 3,
    q: "Universal Containers has configured an agent to handle customer return requests. When a customer initiates a return, the agent must calculate a specific restocking fee. The agent needs to quote this exact fee to the customer and then reuse that same fee amount when summarizing the final refund. The Agentforce Specialist needs to ensure the agent uses deterministic logic to calculate the fee and consistently reuses the exact same value without guessing or hallucinating.\nHow should the specialist configure the agent to achieve this behavior?",
    o: [
      "A. Execute a flow as an agent action to calculate the fee, and make the flow's output directly available to the agent response. The agent will be able to continue to use this value from memory",
      "B. Define a context variable for the fee. Execute a flow as an agent action to calculate the fee, assign the flow's output to that context variable, and have the agent reference that variable in its responses",
      "C. Provide the mathematical formula for the restocking fee in the agent's system instructions and instruct it to remember the result for reuse",
    ],
    a: ["B"],
  },
  {
    i: 4,
    q: "Universal Containers (UC) wants to use Generative AI Salesforce functionality to reduce Service Agent handling time by providing recommended replies based on the existing Knowledge articles.\nOn which AI capability should UC train the service agents?",
    o: ["A. Service Replies", "B. Case Replies", "C. Knowledge Replies"],
    a: ["A"],
  },
  {
    i: 5,
    q: "Universal Containers (UC) is expanding its Agentforce for Service capabilities to include case management. For security purposes, UC wants the agent to verify a customer's identity before providing any case-related information. The verification must be deterministic—ensuring that no case details are shared unless identity verification has been successfully completed.\nWhich approach best meets this requirement?",
    o: [
      'A. Use keywords such as "Always" and "Never" to write clear logic in Topic Instructions to verify user identity before providing any case information.',
      'B. Create a variable to store the verification status, set it as output from a "Verify Identity" action, and apply a filter so any case-related actions only run when the variable confirms verification.',
      "C. Store the verification status in a custom variable and set a global instruction that the agent should check this variable before sharing case information.",
    ],
    a: ["B"],
  },
  {
    i: 6,
    q: "When using a prompt template, what should an Agentforce Specialist consider with their grounding data and chosen model?",
    o: [
      "A. Review the token limit in the Einstein Trust Layer.",
      "B. Ensure queries used for grounding employ offset so the token limits of models are not exceeded.",
      "C. Review the model limitation in Prompt Builder versus the grounding data size.",
    ],
    a: ["C"],
  },
  {
    i: 7,
    q: "An Agentforce Specialist at Universal Containers (UC) is building with no-code tools only. They have many small accounts that are only touched periodically by a specialized sales team, and UC wants to maximize the sales operations team's time. UC wants to help prep the sales team for calls by:\n* Summarizing past purchases\n* Displaying products the contact has shown interest in (with data captured via Data Cloud)\n* Providing a recap of past email and phone conversations that have transcripts\nWhich approach should the Agentforce Specialist recommend to achieve this goal?",
    o: [
      "A. Deploy UC's own custom foundational model on this data first.",
      "B. Fine-tune the standard foundational model due to the complexity of the data.",
      "C. Use a prompt template grounded on CRM and Data Cloud data using standard foundation models.",
    ],
    a: ["C"],
  },
  {
    i: 8,
    q: "Universal Containers operates in a regulated industry and has deployed an Agentforce customer service agent handling thousands of interactions per week. The operations team notices that a significant number of conversations are resulting in unexpected escalations, but cannot identify which agent subagents, formerly known as topics, or actions are consistently underperforming or misconfigured.\nWhich Agentforce feature allows the team to cluster interaction patterns, identify performance gaps across sessions, and apply quality scoring to pinpoint where the agent's configuration needs improvement?",
    o: [
      "A. Agentforce Optimization",
      "B. Agentforce Health Monitoring",
      "C. Agentforce Session Tracing",
    ],
    a: ["A"],
  },
  {
    i: 9,
    q: "What should Universal Containers consider when deploying an Agentforce Service Agent with multiple topics and Agent Actions to production?",
    o: [
      "A. Deploy agent components without a test run in staging, relying on production data for reliable results. Sandbox configuration alone ensures seamless production deployment.",
      "B. Ensure all dependencies are included, Apex classes meet 75% test coverage, and configuration settings are aligned with production. Plan for version management and post-deployment activation.",
      "C. Deploy flows or Apex after agents, topics, and Agent Actions to avoid deployment failures and potential production agent issues requiring complete redeployment.",
    ],
    a: ["B"],
  },
  {
    i: 10,
    q: "Universal Containers (UC) is looking to enhance its operational efficiency. UC has recently adopted Salesforce and is considering implementing Agent to improve its processes.\nWhat is a key reason for implementing Agent?",
    o: [
      "A. Improving data entry and data cleansing",
      "B. Allowing AI to perform tasks without user interaction",
      "C. Streamlining workflows and automating repetitive tasks",
    ],
    a: ["C"],
  },
  {
    i: 11,
    q: "Support agents at Universal Containers are using Agentforce to find troubleshooting information. They've reported that the agent frequently provides knowledge articles that are outdated, even when newer versions of the articles are available. The administrator has confirmed that all articles are correctly chunked and indexed.\nWhich configuration change in the Data Cloud hybrid search index best addresses this problem?",
    o: [
      "A. Disable the keyword index to rely solely on the vector index.",
      "B. Switch the chunking strategy from section-aware to fixed-size.",
      "C. Add a ranking factor for recency based on the LastModifiedDate field.",
    ],
    a: ["C"],
  },
  {
    i: 12,
    q: "The Agentforce Specialist for Coral Cloud Resorts wants to create an agent that will automate the resolution of a large portion of guest complaints related to their vacation experiences. The agent will be able to offer upgrades, hotel credit, and other complimentary options. The agent will also be in charge of escalating the case to a human when a guest has suffered a major disruption (such as cancellation).\nFollowing Salesforce best practices, which type of agent should the Agentforce Specialist create?",
    o: [
      "A. Sales Agent with a Flex prompt template",
      "B. Custom Agent with a Flex prompt template",
      "C. Service Agent with a Flex prompt template",
    ],
    a: ["C"],
  },
  {
    i: 13,
    q: "What does it mean when a prompt template version is described as immutable?",
    o: [
      "A. After a prompt template version is activated, no further changes can be saved to that version.",
      "B. Only the latest version of a template can be activated.",
      "C. Every modification on a template will be saved as a new version automatically.",
    ],
    a: ["A"],
  },
  {
    i: 14,
    q: "An Agentforce Specialist at Universal Containers observes that the agent frequently directs customers with clear billing inquiries to the general troubleshooting subagent. This misrouting is causing a spike in average handle time and missed service-level agreement targets. The contact center manager requires a solution that is quick to implement but preserves the agent's ability to handle complex, non-linear conversations.\nWhat is the most appropriate approach to resolve this?",
    o: [
      "A. Update the agent's global System Instructions to include a list of forbidden keywords for each subagent.",
      "B. Audit subagent instructions for semantic competition and implement deterministic filters to guide the planner's selection.",
      "C. Create a Router sub-flow that uses a Decision element to manually assign every incoming request to a specific subagent.",
    ],
    a: ["B"],
  },
  {
    i: 15,
    q: "Pacific Distribution Co. is implementing a system to manage partner order support and inventory inquiries. The company needs to ensure that large documents are processed effectively to improve retrieval accuracy when agents respond to partner queries. Understanding how documents are broken down and indexed is crucial for this implementation.\nWhat is a key characteristic of the chunking process?",
    o: [
      "A. Chunking breaks large documents into smaller units called passages.",
      "B. The chunking process returns entire documents to the large language model for processing.",
      "C. Chunking strategies are interchangeable and do not affect the retrieval process.",
    ],
    a: ["A"],
  },
  {
    i: 16,
    q: "Universal Containers (UC) has a mature Salesforce org with a lot of data in cases and Knowledge articles. UC is concerned that there are many legacy fields, with data that might not be applicable for Einstein AI to draft accurate email responses.\nWhich solution should UC use to ensure Einstein AI can draft responses from a defined data source?",
    o: ["A. Service AI Grounding", "B. Work Summaries", "C. Service Replies"],
    a: ["A"],
  },
  {
    i: 17,
    q: "An AI Specialist is tasked with creating a prompt template for a sales team. The template needs to generate a summary of all related opportunities for a given Account.\nWhich grounding technique should the AI Specialist use to include data from the related list of opportunities in the prompt template?",
    o: [
      "A. Use the merge fields to reference a custom related list of opportunities.",
      "B. Use merge fields to reference the default related list of opportunities.",
      "C. Use formula fields to reference the Einstein related list of opportunities.",
    ],
    a: ["B"],
  },
  {
    i: 18,
    q: "Universal Containers is implementing a customer verification process for its Service Agent where sensitive account information can only be accessed after the customer passes identity verification. The Agentforce Specialist needs to ensure this security rule is enforced deterministically, preventing the large language model from bypassing the verification requirement to execute the account lookup action.\nWhat should the specialist configure to manage this deterministic behavior?",
    o: [
      "A. Configure a Prompt Defense policy in the Einstein Trust Layer to mask the sensitive account data from the reasoning engine until the user successfully completes the verification process.",
      "B. Store the user's verification status in a custom variable and apply an available when filter condition to the account lookup action, making the action invisible to the reasoning engine until the variable evaluates to true.",
      "C. Add explicit natural language instructions within the subagent definition instructing the large language model to always prioritize the customer verification action before proceeding to the account lookup action.",
    ],
    a: ["B"],
  },
  {
    i: 19,
    q: "What is automatically created when a custom search index is created in Data Cloud?",
    o: [
      "A. A retriever that shares the name of the custom search index.",
      "B. A dynamic retriever to allow runtime selection of retriever parameters without manual configuration.",
      "C. A predefined Apex retriever class that can be edited by a developer to meet specific needs.",
    ],
    a: ["A"],
  },
  {
    i: 20,
    q: 'When a verified customer in a help center says, "I want to upgrade my service plan," an AI agent needs to complete the following tasks: Verify identity and entitlement. Create a new quote. Calculate a prorated upgrade amount. Escalate to an Account Executive (AE) only if the reorder exceeds USD 25,000.\nWhich type of agent should an Agentforce Specialist build to support this use case?',
    o: [
      "A. Service Agent to resolve the case end-to-end and create a new opportunity for the sales team",
      "B. Sales Agent to handle the upsell and large-deal escalation",
      "C. Employee Agent to orchestrate internal logistics and finance",
    ],
    a: ["B"],
  },
  {
    i: 21,
    q: "Universal Containers (UC) wants to offer personalized service experiences and reduce agent handling time with AI-generated email responses, grounded in Knowledge base.\nWhich AI capability should UC use?",
    o: [
      "A. Einstein Email Replies",
      "B. Einstein Service Replies for Email",
      "C. Einstein Generative Service Replies for Email",
    ],
    a: ["B"],
  },
  {
    i: 22,
    q: "An Agentforce Service Agent, who has been successfully assisting customers with service requests in Salesforce, is now unable to help customers with issues related to a new product replacement process. The company recently implemented a custom Product Replacement object in Salesforce to track and manage these replacements.\nWhich Agentforce Agent User change must be implemented to address this issue?",
    o: [
      "A. The permission set group assigned to the Agent User needs to grant access to the Product Replacement flow.",
      "B. The permission set assigned to the Agent User needs Read access to the custom Product Replacement object.",
      "C. The profile assigned to the Agentforce Agent User needs AI training permission to the custom Product Replacement object.",
    ],
    a: ["B"],
  },
  {
    i: 23,
    q: "An AI Specialist is tasked with configuring a generative model to create personalized sales emails using customer data stored in Salesforce. The AI Specialist has already fine-tuned a large language model (LLM) on the OpenAI platform. Security and data privacy are critical concerns for the client.\nHow should the Agentforce Specialist integrate the custom LLM into Salesforce?",
    o: [
      "A. Create an application of the custom LLM and embed it in Sales Cloud via iFrame.",
      "B. Add the fine-tuned LLM in Einstein Studio Model Builder.",
      "C. Enable model endpoint on OpenAI and make callouts to the model to generate emails.",
    ],
    a: ["B"],
  },
  {
    i: 24,
    q: "Universal Containers' service team wants to customize the standard case summary response from Agentforce.\nWhat should the Agentforce Specialist do to achieve this?",
    o: [
      "A. Create a custom Record Summary prompt template for the Case object.",
      "B. Summarize the Case with a standard Agent action.",
      "C. Customize the standard Record Summary template for the Case object.",
    ],
    a: ["A"],
  },
  {
    i: 25,
    q: 'An Agentforce Specialist deployed a Service Agent to an Experience Cloud site and enabled Credential-Based User Verification. The specialist notices that all Data Manipulation Language (DML) record updates are showing the "Last Modified By" user as the authenticated Community User instead of the Agent User.\nWhat should the specialist explain to the business about the effect on audit fields?',
    o: [
      "A. Credential-Based User Verification has been enabled, which in turn respects all sharing and field level security.",
      "B. The Flow execution mode for the agent is set to System Context Without Sharing.",
      "C. Token-Based User Verification has been enabled, which in turn respects all sharing and field-level security.",
    ],
    a: ["A"],
  },
  {
    i: 26,
    q: "Global Finance Corp (GFC) is expanding its Agentforce rollout from a basic customer service agent to a suite of specialized agents handling Fraud Detection, Loan Origination, and Billing. GFC operates entirely within a single, global Salesforce instance. The CIO wants to ensure that as the number of specialized agents scales, the company maintains strict, centralized control over security guardrails and user context, ensuring customers do not have to repeat themselves when their request spans multiple departments.\nWhat is a reasonable architectural approach to achieve this level of scalability and control?",
    o: [
      "A. Use the Model Context Protocol (MCP) to federate multiple external, third-party agents directly into the existing Agentforce Service console.",
      "B. Implement a Multi-Org, Multi-Agent (MOMA) architecture connected via the Agent-to-Agent (A2A) protocol to safely isolate each department's agent.",
      "C. Deploy a Single-Org, Multi-Agent (SOMA) architecture using a primary Orchestrator agent to manage shared context natively and route subtasks to the specialized agents.",
    ],
    a: ["C"],
  },
  {
    i: 27,
    q: "Universal Containers (UC) needs to save agents time with AI-generated case summaries. UC has implemented the Work Summary feature.\nWhat does Einstein consider when generating a summary?",
    o: [
      "A. Generation is grounded with conversation context, Knowledge articles, and cases.",
      "B. Generation is grounded with existing conversation context only.",
      "C. Generation is grounded with conversation context and Knowledge articles.",
    ],
    a: ["A"],
  },
  {
    i: 28,
    q: "A company's support agent is inconsistently executing a mandatory fraud check action before processing refunds. In some conversations the fraud check fires, but in others the agent skips directly to issuing the refund. Upon review, an Agentforce Specialist recommends placing the instruction guideline with run @actions.fraud_check followed by run @actions.process_refund.\nWhat is the effect of this configuration change?",
    o: [
      "A. The fraud-check action will be more strongly suggested to the large language model (LLM), but it may still be skipped if the LLM determines it is not relevant to the conversation.",
      "B. The fraud-check action will execute after the large language model (LLM) check if it missed it in the process step execution, but the agent will lose its ability to use an empathetic tone.",
      "C. The fraud-check action will be forced to execute before the refund action in every conversation, because procedural instructions provide deterministic control over the execution order.",
    ],
    a: ["C"],
  },
  {
    i: 29,
    q: "Universal Containers (UC) users are complaining that agent answers are not satisfactory. The agent is using PDF files as a knowledge source.\nHow should UC troubleshoot this issue?",
    o: [
      "A. Analyze the data mapping between source fields and Data Cloud object fields.",
      "B. Check that the agent has the PDF file field permission access for the data library.",
      "C. Verify the retriever's filter criteria and data source connection.",
    ],
    a: ["C"],
  },
  {
    i: 30,
    q: "Universal Containers (UC) is deploying several prompt templates to assist its support agents using Salesforce's standard foundation models. Leadership requires the generated responses to consistently reflect an empathetic and highly professional tone. UC only permits the use of standard foundational large language models (LLMs).\nWhat is the most effective prompt engineering technique the Agentforce Specialist should implement in Prompt Builder to fulfill this requirement?",
    o: [
      "A. Configure the prompt template tone with a dataset of past interactions using different writing styles, intensifiers, and punctuation to permanently alter the LLM default tone.",
      'B. Include a direct instruction asking the LLM to role-play as a specific character, for example, "Act as an empathetic customer support agent," to provide context and establish the tone.',
      "C. Include multiple-choice picklist questions within the prompt template to systematically test and correct the LLM's understanding of the desired context before generating the output.",
    ],
    a: ["B"],
  },
  {
    i: 31,
    q: "Universal Containers implemented Agentforce for its users. One user complains that an Agent is not deleting activities from the past 7 days.\nWhat is the reason for this issue?",
    o: [
      "A. Agentforce does not have the permission to delete the user's records.",
      "B. Agentforce Delete Record Action permission is not associated to the user.",
      "C. Agentforce does not have a standard Delete Record action.",
    ],
    a: ["C"],
  },
  {
    i: 32,
    q: "Universal Containers deployed the new Agentforce Sales Development Representative (SDR) into production, but sales reps are saying they can't find it.\nWhat is causing this issue?",
    o: [
      "A. Sales rep users profiles are missing the Allow SDR Agent permission.",
      "B. Sales rep users do not have access to the SDR Agent object.",
      "C. Sales rep users are missing the Use SDR Agent permission set.",
    ],
    a: ["C"],
  },
  {
    i: 33,
    q: "Universal Containers recently launched a pilot program to integrate conversational AI into its CRM business operations with Agentforce Agents.\nHow should the Agentforce Specialist monitor Agents' usability and the assignment of actions?",
    o: [
      "A. Run a report on the Platform Debug Logs.",
      "B. Query the Agent log data using the Metadata API.",
      "C. Run Agent Analytics.",
    ],
    a: ["C"],
  },
  {
    i: 34,
    q: "What is the purpose of applying filters in a custom retriever configuration?",
    o: [
      "A. Filters narrow the search results by applying up to 10 conditions based on fields defined in the search index, thereby enhancing the relevancy of the content returned.",
      "B. Filters automatically encrypt and mask sensitive fields in the search index to ensure that only non-confidential information is retrieved for public queries.",
      "C. Filters reformat and aggregate multiple documents into a single summary output to streamline and unify retriever output for more efficient and accurate AI grounding.",
    ],
    a: ["A"],
  },
  {
    i: 35,
    q: "Universal Containers plans to enhance its sales team's productivity using AI.\nWhich specific requirement necessitates the use of Prompt Builder?",
    o: [
      "A. Creating a draft newsletter for an upcoming tradeshow.",
      "B. Predicting the likelihood of customers churning or discontinuing their relationship with the company.",
      "C. Creating an estimated Customer Lifetime Value (CLV) with historical purchase data.",
    ],
    a: ["A"],
  },
  {
    i: 36,
    q: "Universal Containers needs a tool that can analyze voice and video call records to provide insights on competitor mentions, coaching opportunities, and other key information. The goal is to enhance the team's performance by identifying areas for improvement and competitive intelligence.\nWhich feature provides insights about competitor mentions and coaching opportunities?",
    o: ["A. Call Summaries", "B. Einstein Sales Insights", "C. Call Explorer"],
    a: ["C"],
  },
  {
    i: 37,
    q: "A Salesforce Administrator is exploring the capabilities of Agent to enhance user interaction within their organization. They are particularly interested in how Agent processes user requests and the mechanism it employs to deliver responses. The administrator is evaluating whether Agent directly interfaces with a large language model (LLM) to fetch and display responses to user inquiries, facilitating a broad range of requests from users.\nHow does Agent handle user requests in Salesforce?",
    o: [
      "A. Agent will trigger a flow that utilizes a prompt template to generate the message.",
      "B. Agent will perform an HTTP callout to an LLM provider.",
      "C. Agent analyzes the user's request and LLM technology is used to generate and display the appropriate response.",
    ],
    a: ["C"],
  },
  {
    i: 38,
    q: "What is an Agentforce Specialist able to do when the 'Enrich event logs with conversation data' setting in the Agentforce configuration is enabled?",
    o: [
      "A. View the user click path that led to each agent action.",
      "B. View session data including user input and agent responses for sessions.",
      "C. Generate details reports on all agent conversations over any time period.",
    ],
    a: ["B"],
  },
  {
    i: 39,
    q: "At Horizon Insurance, the customer service team is reporting that the agent consistently routes claims intake conversations to the Policy Inquiry subagent, even though user intent clearly indicates a claims-related issue. This misrouting persists despite the user clearly expressing the intent to discuss a claim. The Agentforce Specialist added guard conditions, but the problem persists.\nWhat is most likely causing this incorrect routing in Horizon Insurance's agent?",
    o: [
      "A. Procedural instructions requiring Salesforce Flows to route to the correct subagent",
      "B. Use of global instructions to define subagent routing for agents in compliance-regulated environments",
      "C. Overlap in subagent descriptions and entry conditions between the Claims Intake and Policy Inquiry subagents",
    ],
    a: ["C"],
  },
  {
    i: 40,
    q: "An Agentforce Specialist is considering using a Field Generation prompt template type.\nWhat should the Agentforce Specialist check before creating the Field Generation prompt to ensure it is possible for the field to be enabled for generative AI?",
    o: [
      "A. That the field chosen must be a rich text field with 255 characters or more.",
      "B. That the org is set to API version 59 or higher.",
      "C. That the Lightning page layout where the field will reside has been upgraded to Dynamic Forms.",
    ],
    a: ["C"],
  },
  {
    i: 41,
    q: "Coral Cloud Resorts wants to cover a broad range of user phrasing when testing its FAQ agent.\nWhich Testing Center feature meets that need?",
    o: [
      "A. AI-generated synthetic test utterances based on natural language variations",
      "B. Uploading only a small set of manually written prompts",
      "C. Relying on live customer logs to capture phrasing diversity after deployment",
    ],
    a: ["A"],
  },
  {
    i: 42,
    q: "Before activating a custom Agent action, an Agentforce Specialist would like to understand multiple real-world user utterances to ensure the action is being selected appropriately.\nWhich tool should the Specialist recommend?",
    o: ["A. Agentforce", "B. Agent Builder", "C. Model Playground"],
    a: ["C"],
  },
  {
    i: 43,
    q: "A support team handles a high volume of chat interactions and needs a solution to provide quick, relevant responses to customer inquiries. Responses must be grounded in the organization's knowledge base to maintain consistency and accuracy.\nWhich feature in Einstein for Service should the support team use?",
    o: [
      "A. Einstein Service Replies",
      "B. Einstein Reply Recommendations",
      "C. Einstein Knowledge Recommendations",
    ],
    a: ["A"],
  },
  {
    i: 44,
    q: "Which feature in the Einstein Trust Layer helps to minimize the risks of jailbreaking and prompt injection attacks?",
    o: [
      "A. Secure Data Retrieval and Grounding",
      "B. Data Masking",
      "C. Prompt Defense",
    ],
    a: ["C"],
  },
  {
    i: 45,
    q: "Universal Containers would like to route a service agent conversation to a human agent queue.\nWhich tool connects the service agent to the human agent queue for escalation?",
    o: ["A. Outbound Omni-Channel Flow", "B. Screen Flow", "C. Prompt Flow"],
    a: ["A"],
  },
  {
    i: 46,
    q: "Universal Containers wants to allow its service agents to query the current fulfillment status of an order with natural language. There is an existing autolaunched flow to query the information from Oracle ERP, which is the system of record for the order fulfillment process.\nHow should an Agentforce Specialist apply the power of conversational AI to this use case?",
    o: [
      "A. Create a custom Agent action which calls a flow.",
      "B. Configure the Integration Flow Standard Action in Agent Builder.",
      "C. Create a Flex prompt template in Prompt Builder.",
    ],
    a: ["A"],
  },
  {
    i: 47,
    q: "What is the correct process to leverage Prompt Builder in a Salesforce org?",
    o: [
      "A. Select the appropriate prompt template type to use, select one of Salesforce's standard prompts, determine the object to associate the prompt, select a record to validate against, and associate the prompt to an action.",
      "B. Select the appropriate prompt template type to use, develop the prompt within the prompt workspace, select resources to dynamically insert CRM-derived grounding data, pick the model to use, and test and validate the generated responses.",
      "C. Enable the target object for generative prompting, develop the prompt within the prompt workspace, select records to fine-tune and ground the response, enable the Trust Layer, and associate the prompt to an action.",
    ],
    a: ["B"],
  },
  {
    i: 48,
    q: "An Agentforce Specialist builds a new Service Agent that uses a custom action built on a flow. The agent has been tested in a sandbox and is now ready to deploy.\nWhat is a key consideration regarding the activation status of the agent in the production environment?",
    o: [
      "A. The agent will be activated automatically only if the flow is also active.",
      "B. The agent must be manually activated in production, regardless of its status in the sandbox.",
      "C. The agent will automatically be activated upon successful deployment.",
    ],
    a: ["B"],
  },
  {
    i: 49,
    q: 'Coral Cloud Resorts (CCR) wants to configure its agent so that booking actions are only available when a customer\'s membership tier is "Premium" or "Elite". This business rule must be enforced deterministically.\nWhat should CCR implement?',
    o: [
      "A. Set up custom validation rules on the underlying booking objects to prevent non-eligible customers from completing bookings.",
      "B. Configure topic instructions that clearly state booking actions should only be used for Premium or Elite customers and include examples.",
      "C. Create a context variable mapped to the customer's membership tier field, then add a conditional filter on MembershipTier.",
    ],
    a: ["C"],
  },
  {
    i: 50,
    q: "Universal Containers (UC) uses an agent to handle customer service inquiries. UC recently partnered with an external logistics provider that operates its own distinct, autonomous AI agent. When a customer requests a complex international shipping reroute, the UC agent needs to securely communicate, negotiate routing terms, and delegate the execution of the reroute directly to the logistics provider's AI agent.\nWhich open standard multi-agent protocol is specifically designed to facilitate this autonomous task delegation and negotiation between independent AI agents?",
    o: [
      "A. Agent-to-Agent (A2A) Protocol",
      "B. Model Context Protocol (MCP)",
      "C. OpenAPI Specification (OAS)",
    ],
    a: ["A"],
  },
  {
    i: 51,
    q: "Universal Containers is considering leveraging the Einstein Trust Layer in conjunction with Einstein Generative AI Audit Data.\nWhich audit data is available using the Einstein Trust Layer?",
    o: [
      "A. Response accuracy and offensiveness score",
      "B. Hallucination score and bias score",
      "C. Masked data and toxicity score",
    ],
    a: ["C"],
  },
  {
    i: 52,
    q: "Before activating a custom copilot action, an Agentforce Specialist would like to understand multiple real-world user utterances to ensure the action is being selected appropriately.\nWhich tool should the Agentforce Specialist recommend?",
    o: ["A. Model Playground", "B. Agent", "C. Copilot Builder"],
    a: ["A"],
  },
  {
    i: 53,
    q: "Universal Containers wants to reduce overall customer support handling time by minimizing the time spent typing routine answers for common questions in-chat, and reducing the post-chat analysis by suggesting values for case fields.\nWhich combination of Agentforce for Service features enables this effort?",
    o: [
      "A. Einstein Reply Recommendations and Case Classification",
      "B. Einstein Reply Recommendations and Case Summaries",
      "C. Einstein Service Replies and Work Summaries",
    ],
    a: ["B"],
  },
  {
    i: 54,
    q: "Universal Containers (UC) needs to create a prompt template that provides a detailed product description based on the latest product data. The description will be used in marketing materials to ensure consistency and accuracy.\nWhich prompt template type should UC use?",
    o: ["A. Record Summary", "B. Sales Email", "C. Field Generation"],
    a: ["C"],
  },
  {
    i: 55,
    q: "Cloud Kicks is developing a prompt template in a sandbox and has created multiple saved versions during testing. Cloud Kicks is now preparing to move the template to production.\nWhat is a consideration when deploying the template to production?",
    o: [
      "A. Deploying a template requires all previous versions to be manually activated before deployment can succeed",
      "B. Deploying a template automatically removes all prior versions and replaces them with the deployed version in production",
      "C. Deploying a prompt template includes all versions of the prompt template that are in the source org to the target org",
    ],
    a: ["C"],
  },
  {
    i: 56,
    q: "An Agentforce Agent has been developed with multiple topics and Agent Actions that use flows and Apex.\nWhich options are available for deploying these to production?",
    o: [
      "A. Deploy the flows and Apex using normal deployment tools and manually create the agent-related items in production.",
      "B. Use only change sets because the Salesforce CLI does not currently support the deployment of agent-related metadata.",
      "C. Deploy flows, Apex, and all agent-related items using either change sets or the Salesforce CLI / Metadata API.",
    ],
    a: ["C"],
  },
  {
    i: 57,
    q: "Universal Containers' agent must always look up the customer's account tier and open cases from Salesforce before deciding how to respond.\nBased on Agent Script flow of control, what is true about executing deterministic actions at the very start of a subagent?",
    o: [
      "A. Actions can only be guaranteed to run by placing them in the config block.",
      "B. Only before_reasoning can guarantee the large language model (LLM) is invoked before an action runs.",
      "C. The first instruction in reasoning.instructions always runs before the large language model (LLM) is invoked.",
    ],
    a: ["C"],
  },
  {
    i: 58,
    q: "An Agentforce Specialist wants to include data from the response of external service invocation (REST API callout) into the prompt template.\nHow should the Agentforce Specialist meet this requirement?",
    o: [
      "A. Convert the JSON to an XML merge field.",
      "B. Use External Service Record merge fields.",
      'C. Use "Add Prompt Instructions" flow element.',
    ],
    a: ["B"],
  },
  {
    i: 59,
    q: "How is Data Cloud leveraged by the Answer Questions with Knowledge action in Agentforce?",
    o: [
      "A. Data Cloud is not required; the articles can be accessed directly from the CRM by the agent.",
      "B. Data Cloud stores and manages the indexed Knowledge articles.",
      "C. Data Cloud provides the real-time data streams that update the Knowledge articles.",
    ],
    a: ["B"],
  },
  {
    i: 60,
    q: "Cloud Kicks (CK) recently finished the development of a new prompt template that uses its own large language model (LLM). CK is deploying a prompt template from a sandbox to a production org, and is receiving an error. When trying to deploy the change set, CK is getting an error related to the LLM used in the prompt template.\nWhat is the cause of the error?",
    o: [
      "A. The prompt does not specify that it is a custom LLM.",
      "B. BYOLLM is not yet supported for in prompt templates in production.",
      "C. The name of the LLM does not match in sandbox and production.",
    ],
    a: ["C"],
  },
  {
    i: 61,
    q: "Universal Containers has multiple Salesforce orgs, each with a unique customer service agent where a verification agent must pass customer identity data to downstream agents handling account modifications. The customer ID must remain secure and persistent across agent handoffs without exposure to large language model (LLM) modification.\nWhat is the most appropriate configuration?",
    o: [
      "A. Implement a custom object to temporarily store verification status and have each agent query it via SOQL actions during execution.",
      "B. Store customer identity information in conversation variables created by the first agent and have other agents read those same conversation variables.",
      "C. Use the Agent API to start the downstream agent's session and pass the verified customer ID as a read-only context variable, ensuring security and preventing LLM alteration.",
    ],
    a: ["C"],
  },
  {
    i: 62,
    q: "Universal Containers wants to test agents while preserving real data and isolating from production.\nWhich environment should the company use with Testing Center?",
    o: [
      "A. Use personal developer orgs unrepresentative of production data.",
      "B. Use production org directly with test assertions.",
      "C. Use sandbox environments replicated from production for safe testing.",
    ],
    a: ["C"],
  },
  {
    i: 63,
    q: "Universal Containers has a new AI project.\nWhat should an Agentforce Specialist consider when adding a related list on the Account object to be used in the prompt template?",
    o: [
      "A. After selecting a related list from the Account, use the field picker to choose merge fields in Prompt Builder.",
      "B. Prompt Builder must be used to assign the fields from the related list as a JSON format.",
      "C. The fields for the related list are based on the default page layout of the Account for the current user.",
    ],
    a: ["A"],
  },
  {
    i: 64,
    q: "What is a key benefit of the Agent-to-Agent (A2A) protocol?",
    o: [
      "A. Provides a standardized framework for cross-vendor agent discovery and communication",
      "B. Allows auto-onboard third-party agents without additional contracts, trust scores, or shared identity controls",
      "C. Provides a standardized runtime engine for internal agent discovery and communication",
    ],
    a: ["A"],
  },
  {
    i: 65,
    q: "Universal Containers (UC) is using Einstein Generative AI to generate an account summary. UC aims to ensure the content is safe and inclusive, utilizing the Einstein Trust Layer's toxicity scoring to assess the content's safety level.\nIn the Einstein Generative AI Toxicity Scoring system, what does a score of 1 indicate?",
    o: [
      "A. The response is the least toxic in the toxicity category.",
      "B. The response is not toxic.",
      "C. The response is the most toxic.",
    ],
    a: ["C"],
  },
  {
    i: 66,
    q: "Universal Containers wants to assign agents to improve department efficiency.\nWhich configuration ensures the right tasks are handled by the right agents?",
    o: [
      "A. SDR Agent for lead qualification, Service Agent for support tickets, Employee Agent for HR requests",
      "B. Sales Coach Agent for lead and service Agent for HR requests, and Support tickets to ensure cases are available",
      "C. One Service Agent to efficiently handle each of these scenarios, which reduces the number of agent types needed for support",
    ],
    a: ["A"],
  },
  {
    i: 67,
    q: "Universal Containers deploys a new Agentforce Service Agent into the company's website but is getting feedback that the Agentforce Service Agent is not providing answers to customer questions that are found in the company's Salesforce Knowledge articles.\nWhat is the likely issue?",
    o: [
      "A. The Agentforce Service Agent user is not assigned the correct Agent Type License.",
      "B. The Agentforce Service Agent user needs to be created under the standard Agent Knowledge profile.",
      "C. The Agentforce Service Agent user was not given the Allow View Knowledge permission set.",
    ],
    a: ["C"],
  },
  {
    i: 68,
    q: "Universal Containers (UC) has configured an Agentforce Data Library using Knowledge articles. When testing in Agent Builder and the Experience Cloud site, the agent is not responding with grounded Knowledge article information. However, when tested in Prompt Builder, the response returns correctly.\nWhat should UC do to troubleshoot the issue?",
    o: [
      'A. Create a new permission set that assigns "Manage Knowledge" and assign it to the Agentforce Service Agent User.',
      "B. Ensure the assigned User permission set includes access to the prompt template used to access the Knowledge articles.",
      "C. Ensure the Data Cloud User permission set has been assigned to the Agentforce Service Agent User.",
    ],
    a: ["C"],
  },
  {
    i: 69,
    q: "A Universal Containers administrator is setting up Einstein Data Libraries. After creating a new library, the administrator notices that only the file upload option is available; there is no option to configure the library using a Salesforce Knowledge base.\nWhat is the most likely cause of this issue?",
    o: [
      "A. The current Salesforce org lacks the necessary Einstein for Service permissions that support the Knowledge-based Data Library option, so only the file upload option is presented.",
      "B. Salesforce Knowledge is not enabled in the organization; without Salesforce Knowledge enabled, the Knowledge-based data source option will not be available in Einstein Data Libraries.",
      "C. The administrator is not using Lightning Experience, which is required to display all data source options, including the Knowledge base option, when configuring Einstein Data Libraries.",
    ],
    a: ["B"],
  },
  {
    i: 70,
    q: 'What is an Agentforce Specialist able to do when the "Enrich event logs with conversation data" setting in Agent is enabled?',
    o: [
      "A. View the user click path that led to each copilot action.",
      "B. View session data including user input and copilot responses for sessions over the past 7 days.",
      "C. Generate details reports on all Copilot conversations over any time period.",
    ],
    a: ["B"],
  },
  {
    i: 71,
    q: "When configuring a prompt template, an Agentforce Specialist previews the results of the prompt template they've written. They see two distinct text outputs: Resolution and Response.\nWhich information does the Resolution text provide?",
    o: [
      "A. It shows the full text that is sent to the Trust Layer.",
      "B. It shows the response from the LLM based on the sample record.",
      "C. It shows which sensitive data is masked before it is sent to the LLM.",
    ],
    a: ["B"],
  },
  {
    i: 72,
    q: "What is the importance of Action Instructions when creating a custom Agent action?",
    o: [
      "A. Action Instructions define the expected user experience of an action.",
      "B. Action Instructions tell the user how to call this action in a conversation.",
      "C. Action Instructions tell the large language model (LLM) which action to use.",
    ],
    a: ["A"],
  },
  {
    i: 73,
    q: "An administrator wants to check the response of the Flex prompt template they've built, but the preview button is greyed out.\nWhat is the reason for this?",
    o: [
      "A. The records related to the prompt have not been selected.",
      "B. The prompt has not been saved and activated.",
      "C. A merge field has not been inserted in the prompt.",
    ],
    a: ["A"],
  },
  {
    i: 74,
    q: "Before activating a custom agent action, an Agentforce Specialist would like to evaluate multiple real-world user utterances to ensure the action is being selected appropriately.\nWhich tool should the Agentforce Specialist recommend?",
    o: ["A. Testing Center", "B. Agentforce Builder", "C. Prompt Builder"],
    a: ["A"],
  },
  {
    i: 75,
    q: 'A service manager wants to use Salesforce Prompt Builder to help agents summarize customer case notes after a support call. The summary should: * Capture the customer\'s issue, troubleshooting steps taken, and next actions. * Be no longer than five sentences. * Use plain language (no technical jargon). If no next action is identified, the summary should explicitly state "No next action required."\nWhich prompt template follows Salesforce prompt design best practices?',
    o: [
      'A. Role: You are an experienced support agent. Task: Summarize the case notes. Context: Include customer issue, troubleshooting steps, and next actions. Constraints: Limit to 5 sentences, use plain language, and if no next action is found, state "No next action required." Format: Use numbered sentences for clarity.',
      "B. Role: You are a support agent writing a case summary. Task: Provide a professional summary of the issue and troubleshooting steps. Context: Include customer issue, steps taken, and next actions if available. Constraints: No strict sentence limit, but use plain language. If no next action is found, leave it out. Format: Use paragraphs for readability.",
      "C. Role: You are a case documentation assistant. Task: Write a summary of the support call. Context: Always describe the customer issue, troubleshooting, and resolution details. Constraints: The summary should be comprehensive and professional, but there is no limit on length or language style. Format: Use complete sentences in a narrative style.",
    ],
    a: ["A"],
  },
  {
    i: 76,
    q: "An administrator is responsible for ensuring the security and reliability of Universal Containers' (UC) CRM data. UC needs enhanced data protection and up-to-date AI capabilities. UC also needs to include relevant information from a Salesforce record to be merged with the prompt.\nWhich feature in the Einstein Trust Layer best supports UC's need?",
    o: [
      "A. Data masking",
      "B. Dynamic grounding with secure data retrieval",
      "C. Zero-data retention policy",
    ],
    a: ["B"],
  },
  {
    i: 77,
    q: "In a Knowledge-based data library configuration, what is the primary difference between the identifying fields and the content fields?",
    o: [
      "A. Identifying fields help locate the correct Knowledge article, while content fields enrich AI responses with detailed information.",
      "B. Identifying fields categorize articles for indexing purposes, while content fields provide a brief summary for display.",
      "C. Identifying fields highlight key terms for relevance scoring, while content fields store the full text of the article for retrieval.",
    ],
    a: ["A"],
  },
  {
    i: 78,
    q: "Universal Containers (UC) is setting up a new Agentforce Service Agent. The company has sensitive medical product research stored internally and wants to ensure the agent cannot access it.\nWhat should UC do?",
    o: [
      "A. Assign the Agentforce Service Agent user the lowest possible role in the organization's hierarchy to block access.",
      "B. Disable the Agentforce Service Agent's ability to use any Salesforce custom object or related fields.",
      "C. Follow the principle of least privilege and avoid granting permission to view the Medical Product object or related fields.",
    ],
    a: ["C"],
  },
  {
    i: 79,
    q: "In Model Playground, which hyperparameters of an existing Salesforce-enabled foundational model can an Agentforce Specialist change?",
    o: [
      "A. Temperature, Frequency Penalty, Presence Penalty",
      "B. Temperature, Top-k sampling, Presence Penalty",
      "C. Temperature, Frequency Penalty, Output Tokens",
    ],
    a: ["A"],
  },
  {
    i: 80,
    q: "Where should the Agentforce Specialist go to add/update actions assigned to a copilot?",
    o: [
      "A. Copilot Actions page, the record page for the copilot action, or the Copilot Action Library tab",
      "B. Copilot Actions page or Global Actions",
      "C. Copilot Detail page, Global Actions, or the record page for the copilot action",
    ],
    a: ["A"],
  },
  {
    i: 81,
    q: "How does the AI Retriever function within Data Cloud?",
    o: [
      "A. It performs contextual searches over an indexed repository to quickly fetch the most relevant documents, enabling grounding AI responses with trustworthy, verifiable information.",
      "B. It monitors and aggregates data quality metrics across various data pipelines to ensure only high-integrity data is used for strategic decision-making.",
      "C. It automatically extracts and reformats raw data from diverse sources into standardized datasets for use in historical trend analysis and forecasting.",
    ],
    a: ["A"],
  },
  {
    i: 82,
    q: "After a successful implementation of Agentforce Sales Agent with sales users, Universal Containers now aims to deploy it to the service team.\nWhich key consideration should the Agentforce Specialist keep in mind for this deployment?",
    o: [
      "A. Assign the Agentforce for Service permission to the Service Cloud users.",
      "B. Assign the standard service actions to Agentforce Service Agent.",
      "C. Review and test standard and custom Agent topics and actions for Service Center use cases.",
    ],
    a: ["C"],
  },
  {
    i: 83,
    q: "Universal Containers deploys a new Agentforce Service Agent into the company's website but is getting feedback that the Service Agent is not providing answers to customer questions that are found in the company's Salesforce Knowledge articles.\nWhat is the likely issue?",
    o: [
      "A. The Agentforce Service Agent user was not given the Allow View Knowledge permission set.",
      "B. The Agentforce Service Agent user is not assigned the correct Agent Type License.",
      "C. The Agentforce Service Agent user needs to be created under the standard Agent Knowledge profile.",
    ],
    a: ["A"],
  },
  {
    i: 84,
    q: "Universal Containers (UC) is scaling its Agentforce deployment and needs to securely connect its AI agents to a growing number of external enterprise data systems and local developer environments. Instead of building custom integration logic and bespoke Application Programming Interfaces (APIs) for each new data source, the Agentforce Specialist recommends leveraging the Model Context Protocol (MCP).\nWhat is the primary purpose of using an open standard like MCP in this scenario?",
    o: [
      "A. To standardize the secure connection and delivery of context between the AI models and various local or remote data sources.",
      "B. To replace the need for Retrieval-Augmented Generation (RAG) by storing all external data natively within the large language model (LLM)'s weights.",
      "C. To allow the agent to autonomously negotiate task delegation with third-party supply chain agents.",
    ],
    a: ["A"],
  },
  {
    i: 85,
    q: "Universal Containers built a Field Generation prompt template that worked for many records, but users are reporting random failures with token limit errors.\nWhat is the cause of the random nature of this error?",
    o: [
      "A. The template type needs to be switched to Flex to accommodate the variable amount of tokens generated by the prompt grounding.",
      "B. The number of tokens generated by the dynamic nature of the prompt template will vary by record.",
      "C. The number of tokens that can be processed by the LLM varies with total user demand.",
    ],
    a: ["B"],
  },
  {
    i: 86,
    q: "An administrator at Universal Containers has successfully deployed a new agent from a sandbox to production using a change set. The agent uses a prompt template that invokes a Salesforce flow to perform a complex calculation. In production, when users interact with the agent, it fails with an error message every time the flow is supposed to run. The flow was included in the change set and is present in production.\nWhat is the most likely cause of this issue?",
    o: [
      "A. The flow was not manually activated in the production org after the deployment.",
      "B. The user in production does not have permission to run the flow.",
      "C. The change set did not include the dependent Apex classes for the flow.",
    ],
    a: ["A"],
  },
  {
    i: 87,
    q: "Cloud Kicks uses a third-party agent for research and an Agentforce agent for customer service.\nWhich purpose-built protocol allows cross-vendor agents to communicate?",
    o: [
      "A. Model Context Protocol (MCP)",
      "B. Application Programming Interface (API)",
      "C. Agent-to-Agent (A2A)",
    ],
    a: ["C"],
  },
  {
    i: 88,
    q: "An Agentforce Specialist is setting up a new org and needs to ensure that users can create and execute prompt templates. The Agentforce Specialist is unsure which roles are necessary for these tasks.\nWhich permission sets should the Agentforce Specialist assign to users who need to create and execute prompt templates?",
    o: [
      "A. Prompt Template Manager for creating templates and Data Cloud Admin for executing templates",
      "B. Prompt Template Manager for creating templates and Prompt Template User for executing templates",
      "C. Data Cloud Admin for creating templates and Prompt Template User for executing templates",
    ],
    a: ["B"],
  },
];
