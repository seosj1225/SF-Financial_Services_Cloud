import React, { useState, useEffect, useMemo, useCallback } from "react";

const QUESTIONS = [{"i": 1, "q": "Which of the following statements are correct when creating Financial Goals?", "o": ["A. Users can only create savings oriented goals.", "B. Users require the Financial Goals permission set to works with Financial Goals", "C. Users can associate a goal with a specific Financial Account.", "D. Users can create goals for paying down debt"], "a": ["D"]}, {"i": 2, "q": "A Salesforce Admin is configuring a new Action Plan Template. One task in that template needs to be picked up by the next available Advisor. What assignment logic should the Admin use when configuring this template task?", "o": ["A. Action Plan Creator", "B. Specific User", "C. Account Team", "D. Role", "E. Queues"], "a": ["E"]}, {"i": 3, "q": "Which three of these statements are true for Rollup By Lookup (RBL) in Financial Services Cloud?", "o": ["A. An RBL (Rollup By Lookup) rule displays summary calculations of financial account information, such as account balances.", "B. Person Accounts need to be enabled in order to use the Rollup by Lookup functionality.", "C. The Rollup By Lookup (RBL) configuration updates the corresponding RBL summaries at the diem and group levels", "D. Salesforce does not recommend or provide support for creation or customization of Financial Services Cloud RBL rules", "E. RBL rules do not require a lot of processing power."], "a": ["A", "C", "D"]}, {"i": 4, "q": "During the delivery stage of a Financial Services Cloud (FSC) implementation, a consultant needs to think about how to utilize FSC-related objects. Which three things should the consultant consider when adopting such objects?", "o": ["A. In a household, each household member is modeled as a Contact, and the household is modeled as an Account.", "B. In a household, each of the household members is modeled as a Person Account and the household is modeled as an Account.", "C. Role Hierarchy-based sharing can be disabled for the Financial Deal object but can't be disabled for the Opportunity object.", "D. Both the Financial Deal object and the Opportunity object support Compliant Data Sharing.", "E. Interaction Summary is an enhancement of the standard Activity object. FSC implementations should use Interaction Summary as a replacement for the Activity object."], "a": ["A", "C", "D"]}, {"i": 5, "q": "What actions can a Wealth Advisor take from the Life Events card7", "o": ["A. Create Case", "B. Create Lead & Referral", "C. Open an Account", "D. Request Record Approval", "E. Create Opportunity"], "a": ["B", "D", "E"]}, {"i": 6, "q": "Agents for an insurance company need to know the current and past weather conditions when creating customer claims. The consultant implements a Flex Card for weather conditions in the console to ensure the agents can access the information. The Flex Card needs to provide fields extracted from a weather API and an account field from Salesforce.\nWhich method should the consultant use, according to best practices?", "o": ["A. APEX classes", "B. Streaming API", "C. Data Raptor Extract", "D. Integration Procedure"], "a": ["D"]}, {"i": 7, "q": "Which two statements are true for a Group in Financial Services Cloud?", "o": ["A. Financial Services Cloud includes a group record type for households", "B. A group is a type of account record that people and businesses can be related to through the Financial Account relationship object", "C. A group is a type of account record that people and businesses can be related to through the account contact relationship object.", "D. Financial Services Cloud includes a group record type for businesses"], "a": ["A", "C"]}, {"i": 8, "q": "One administrator user at a financial services company needs to help management build reports and gain insights into business performance by including branch management reportable objects.\nWhich two considerations should the administrator include when configuring the report?", "o": ["A. Branch Unit Related Record report types have related object names including Lead, Account, and Contact but exclude Financial Account.", "B. Bankers with Branches with Opportunities, Accounts. Leads, and Contacts report types are available for creating reports with Branch Unit Related Records.", "C. The reportable objects include Banker. Branch Unit, Branch Unit Related Records, and Branch Unit Customer.", "D. When Branch Unit is the primary object, the administrator can select Branch Unit Customers or Branch Unit Related Records as related objects."], "a": ["B", "C"]}, {"i": 9, "q": "What is a key step in identifying different business processes and outlining encompassing system flows based on the existing environment when setting up Salesforce Financial Services Cloud (FSC)?", "o": ["A. Creating a new Salesforce instance from scratch for the customer", "B. Importing the customer's existing data into Salesforce FSC without any modifications", "C. Implementing a generic, one-size-fits-all solution for all customers", "D. Conducting a gap analysis between the customer's current processes and Salesforce FSC capabilities"], "a": ["D"]}, {"i": 10, "q": "How should developers configure customized nodes for display in Actionable Relationship Center (ARC)?", "o": ["A. Select Use Flex Card from the node Display tab to show the node in a Flex Car", "B. Reference the Lightning web component in the Display properties of the custom ARC relationship graph.", "C. Select Omni Script from the node Actions tab to show the node in an Omni Script.", "D. Reference the Flex Card in the Display properties of the custom ARC relationship graph."], "a": ["D"]}, {"i": 11, "q": "What does the Salesforce Admin have to install to provide users access to referral dashboards and reports?", "o": ["A. The managed extension package for intelligent Need-Based Referrals and Scoring", "B. Einstein Analytics for Financial Services", "C. The unmanaged extension package for Intelligent Need-Based Referrals and Scoring", "D. Salesforce CRM Dashboards"], "a": ["C"]}, {"i": 12, "q": "What are two language-related limitations of Financial Services Cloud?", "o": ["A. Predefined reciprocal roles are available only in English.", "B. Custom component labels are supported only in English.", "C. Referral record type labels are supported only in English.", "D. Flows are available only in English."], "a": ["A", "C"]}, {"i": 13, "q": "Users at Lake Bank have been creating multiple events for once in a lifetime event such as birth. What should an Administrator do to prevent users from accidentally creating more than one event of such an event type?", "o": ["A. Create an Apex trigger that will prevent the saving of multiple one-time events", "B. Select the Unique checkbox on the picklist value for the Event Type field on the Person Life Event object", "C. Remove user's ability to create one-time events", "D. Create a validation rule that will stop the user if they attempt to add multiple one-time events."], "a": ["D"]}, {"i": 14, "q": "A Financial Services Cloud (FSC) administrator is assigning permission set licenses to users, including personal bankers. Which permission set license is recommended for this set of users?", "o": ["A. FSC Foundations permission set license", "B. FSC Basic permission set license", "C. FSC Extension permission set license", "D. FSC Standard permission set license"], "a": ["D"]}, {"i": 15, "q": "Which two limitations should a Salesforce Administrator consider before enabling Person Accounts?", "o": ["A. Person Accounts can be enabled and disabled only by contacting Salesforce Support", "B. Person Accounts cannot be disabled once they were enabled", "C. Creating a client record via Salesforce Inbox is not supported.", "D. AppExchange packages will not work if Person Accounts are enabled"], "a": ["B", "C"]}, {"i": 16, "q": "A Financial Services Cloud (FSC) administrator wants to create a new FSC permission set that includes the Access Interest Tags for Financial Services Cloud permission.\nWhich two permission sets should be cloned to create this new permission set and give access to interest tags?", "o": ["A. FSC Foundations permission set", "B. FSC Extension permission set", "C. FSC Standard permission set", "D. FSC Basic permission set"], "a": ["A", "B"]}, {"i": 17, "q": "The Salesforce Admin wants to make it easier for call center agents to complete some common tasks by setting up flow sand launch them from the Retail Banking Console. What does the Admin have to keep in mind when setting up Flows?", "o": ["A. Flows can be used to provide step-by-step guidance for address changes, without the need for then agent to navigate to different screens.", "B. To open. edit, or create a Flow in Flow Builder, the user needs the Run Flows permission.", "C. To use Financial Services Cloud Flows, you'll need the Financial Services Managed Package installed m the org and the Financial Services Cloud a permission set assigned to the user.", "D. To use a Flow, a user must have access to the underlying object and its field"], "a": ["C"]}, {"i": 18, "q": "A financial services company wants to plan ahead for designing the Financial Services Cloud (FSC) implementation. Which three activities should the implementation team prioritize during planning?", "o": ["A. Prepare for integrations with transactional systems, external data sources, custodians, and any other platforms that the company's business relies on.", "B. Beyond the preconfigured settings, evaluate whether they need advanced customizations.", "C. Enable and configure person accounts in FSC, and assign users with permission set licenses.", "D. Review the out-of-the-box capabilities and compare them to the company's current needs.", "E. Design the modifications to fields, picklists, layouts, and othKrequired features to support business processes."], "a": ["A", "B", "D"]}, {"i": 19, "q": "How can the Salesforce Admin help agents who deal with a large number of customers on a daily basis, quickly scan the Life Events component and find the information they need without much effort?", "o": ["A. The Admin can customize the order of life events to be set in chronological order.", "B. The user can change the color of important life events to red.", "C. The Admin can change the color of important life events to red.", "D. The user can customize the order of life events to be set in chronological order"], "a": ["C"]}, {"i": 20, "q": "A system administrator at a financial services company wants to build a report to show Interest Tags.\nWhich two things should the administrator consider when configuring the report?", "o": ["A. When the user defines the custom report type, Tag Categories should be selected as the Primary Object.", "B. When the user defines the custom report type, Topics should be selected as the Primary Object.", "C. The user must build a report using the Topics object to view Interest Tags in the report.", "D. To show Interest Tags applied to specific objects, the user can add a filter in the report and select the object name."], "a": ["B", "D"]}, {"i": 21, "q": "What step is required to give users access to the Financial Services Cloud Commercial Banking features?", "o": ["A. Update Industries Settings to give users access to the Commercial Banking Console Lightning app.", "B. Assign permission sets to give users access to the Commercial Banking Console Lightning app.", "C. Update theuser profiles to give users access to Financial Services Cloud objects", "D. Install the Commercial Banking Managed Package"], "a": ["B"]}, {"i": 22, "q": "Cumulus Insurance has created a Delegated Administrator group for its franchise users to reduce the workload on head office support staff.\nWhich three functions should be added to the Delegated Administrator group?", "o": ["A. Unlock users.", "B. Modify permission sets.", "C. Set organization-wide sharing defaults on custom objects.", "D. Assign or remove permission sets for users in their delegated groups.", "E. Create and manage membership of specified public groups."], "a": ["A", "D", "E"]}, {"i": 23, "q": "Cumulus Bank has branches in multiple countries that are required to report in local currency, while the corporate headquarters office wishes to see reports in a single currency (the corporate currency).\nWhich solution should a consultant recommend to meet these requirements?", "o": ["A. Set the default currency for head office and have the regions download their reports to Excel and convert them manually.", "B. Use a third party from AppExchange add-on to implement currency conversions.", "C. Enable multiple currencies and advanced currency management, and set a corporate currency for the corporate headquarters office.", "D. Allow users to set their preferred currency in their profile and design reports that convert currencies for the user running the report."], "a": ["C"]}, {"i": 24, "q": "A financial services company needs a custom field for reporting when relating two-person accounts to each other. Which object should the Financial Services Cloud consultant configure the custom field on?", "o": ["A. Account Contact Relationship", "B. Contact-Contact Relationship", "C. Person Account", "D. Account Account Relationship"], "a": ["D"]}, {"i": 25, "q": "An investment bank is implementing Financial Services Cloud (FSC) to manage the deal pipeline. Each opportunity has confidential information that the deal team members must only view.\nIn addition, each member needs the ability to take and share notes directly within Salesforce with others on the team.\nWhich three FSC features should be part of the solution design?", "o": ["A. Financial Deal Management", "B. Sharing Rules", "C. Compliant data Sharing", "D. Profiles", "E. Interaction Summaries"], "a": ["A", "B", "E"]}, {"i": 26, "q": "Omni Script represents processes with fast, personalized, and consistent responses. This type extends the metadata type and inherits its full name field. To use the Omni Script metadata type, what should the administrator enable in the Salesforce org?", "o": ["A. Discovery Framework", "B. Lightning Experience for Financial Services Cloud", "C. Custom Domain", "D. Einstein Relationship Insights"], "a": ["C"]}, {"i": 27, "q": "A consultant is configuring a demo for a customer but cannot create new residential loan application records.\nWhat is prohibiting the consultant from creating a new residential loan application?", "o": ["A. The Residential Loan Application flow was not enabled in the setup.", "B. The administrator did not enable \"Allow Mortgage Access\" in Setup.", "C. The user does not have \"Mortgage User\" checked in their user record.", "D. The administrator did not assign the Mortgage permission set to the user."], "a": ["D"]}, {"i": 28, "q": "How should developers configure customized nodes for display in ARC?", "o": ["A. Select Use LWC from the node Display tab to show the node in a Lightning Web Component", "B. Reference the Lightning Web Component in the Display properties of the custom ARC relationship graph", "C. Select Use Flex Card from the node Display tab to show the node in a Flex Card", "D. Reference the Flex Card in the Display properties of the custom ARC relationship graph"], "a": ["B"]}, {"i": 29, "q": "A financial services company wants to track different categories of financial accounts in its org. Relationship managers must be able to see all of these financial accounts in one place on the customer's Account record page grouped by categories.\nWhich three steps should an administrator take to configure the Financial Account object and the Account Lightning record page to meet the design?", "o": ["A. Add the Financial Account List component to the Account Lightning record page.", "B. Configure the Financial Account List components for each required category.", "C. Create Account lookup fields on the Financial Account object to link the Financial Accounts to an Account.", "D. Create a custom picklist on the Financial Account object totrack the Typ", "E. Configure Financial Account record types to match the required categories."], "a": ["B", "C", "D"]}, {"i": 30, "q": "A financial institution has custom security and visibility rules where certain users need to see specific records even though they are not typically engaged in that Account. This includes legal and compliance members who must be engaged for particular deals.\nWhich Financial Services Cloud capability provides the ability to accommodate this request?", "o": ["A. Compliant Data Sharing", "B. Custom Sharing Rules", "C. Business Rules Engine", "D. Interaction Summaries"], "a": ["A"]}, {"i": 31, "q": "Which setting in Action Plans helps to avoid non working hours, company holidays, and other non working days for deadline calculation?", "o": ["A. Sync with Company Calendar", "B. Skip Non-Work Days for Deadlines", "C. Skip Non-Work Days For Tasks", "D. Skip Non-Work Days for Action Plans"], "a": ["B"]}, {"i": 32, "q": "A new custom object has been created, and the records of this object will be created through integration with another system What should a consultant do to ensure the data is loading into the correct fields in Financial Services Cloud?", "o": ["A. Create a junction object between the external system and the new customer object where the data will reside", "B. Ensure custom metadata is configured and each custom metadata record details where the data will be sent", "C. Use a CSV file with the data created and use Data Loader to map to the correct field", "D. Utilize a field mapping file with the external system (allocation and the corresponding field in Salesforce"], "a": ["D"]}, {"i": 33, "q": "While working for an insurance client implementing Financial Services Cloud, an API integration between Salesforce and a risk control system has been configured. The consultant is asked to ensure the correct profiles and permissions were set up for this connection. Which two steps should the consultant take?", "o": ["A. Update the System Administrator profile to include the API Only User.", "B. Create a dedicated Integration User.", "C. Assign the integration user to the System Administrator profile.", "D. Create a new custom profile and ensure API Only is selected."], "a": ["B", "D"]}, {"i": 34, "q": "The Salesforce Admin of Lake Tahoe Bank wants to implement Financial Services Cloud using the individual object model. What are the steps to disable person accounts? (Choose Three)", "o": ["A. Log a case with Salesforce to perform the conversion from Person Accounts to the individual model.", "B. Assign the Person Account record type to the user profiles.", "C. Disable the Person Account custom setting.", "D. Remove Person Account record types from the Individual Record Type Mapper.", "E. Assign the Individual record type to the user profiles."], "a": ["A", "D", "E"]}, {"i": 35, "q": "Scott Adams is opening a joint savings account with his mom, Rachel Adams. Rachel Adams is the primary member of the Adams Household. Personal Banker Hank Burton wants to make sure that Scott's data is rolling up to the Adams Household. How can the Banker accomplish this?", "o": ["A. Make the Adams Household Scott's primary Group and edit tie Activities & Objects to ft* Up.", "B. Add Scott’s as a Related Contact to the Adams Household.", "C. Make the Adams Household Scotts Primary Group and make Scott the Primary member", "D. Disable the Primary Group setting for Scott on the Adams Household"], "a": ["A"]}, {"i": 36, "q": "Lake Tahoe Bank is rolling out Financial Services Cloud and the VP of IT is concerned about the cost of the licenses. The System Admin recommends using restricted licenses for users that need only limited access to Financial Service Cloud features. Which Financial Services Cloud permission set license enables user access to a license with contractual restrictions for Financial Services Cloud and\ncan be used to grant restricted access to users like Bank Tellers?", "o": ["A. Financial Services Cloud Standard", "B. Client Segmentation", "C. Financial Service Cloud Basic", "D. Financial Service Cloud Extension"], "a": ["C"]}, {"i": 37, "q": "Cumulus Cloud Bank needs help onboarding new customers. The business process requires updating the Know Your Customer (KYC) document checklist and performing internal tasks in a predefined order.\nHowever, during an internal audit, it was found that bankers often miss these tasks and still move to the next stage of the onboarding process.\nWhat should a consultant recommend?", "o": ["A. Create an after-save trigger to generate reminder tasks.", "B. Utilize Chatter notifications for reminders.", "C. Utilize Action Plan and Action INan Template.", "D. Utilize Financial Services Cloud flag Templates to flag missing items."], "a": ["C"]}, {"i": 38, "q": "A consultant advising Cumulus Bank wants to ensure that the bank is compliant with Identity Verification Regulations when customers contact the bank.\nWhich two features should a consultant leverage to design this business process?", "o": ["A. Omni Studio", "B. Process Builder", "C. Discovery Framework", "D. Screen Flows"], "a": ["B", "D"]}, {"i": 39, "q": "Which three processes are part of Claims Management?", "o": ["A. Auto Adjudication", "B. Reserve Management", "C. Quoting", "D. Underwriting", "E. Payment"], "a": ["A", "B", "E"]}, {"i": 40, "q": "A wealth management division manages the financial assets of many wealthy clients.\nWhich three steps should the Financial Services Cloud consultant take to offer ahigh level of customization to boost user productivity?", "o": ["A. Create a new type of person account so trust group details roll down to the beneficiaries level.", "B. Create a Custom Field Set solely for the Wealth Managers without affecting the Investment Bankers.", "C. Assign the Custom Field Set to the Financial Summary component.", "D. Create and assign the Custom Field Set permission set to all users.", "E. Assign the Custom Field Set To a Lightning component."], "a": ["B", "C", "E"]}, {"i": 41, "q": "Cumulus Insurance has a franchise business model with a large number of franchisees who operate independently but report to regional managers who are Cumulus employees. The company would like the franchise owners and their employees to have access to the Cumulus Salesforce Financial Services Cloud (FSC) instance. The company plans to use the Role Hierarchy and sharing\nrules to implement this. What should the architect at Cumulus Insurance be aware of for this solution?", "o": ["A. Franchise users will need to switch their browsers to a platform that supports Lightning Web Components.", "B. Salesforce FSC only allows 1,024 public groups.", "C. The administrator can define up to 300 total sharing rules for each object.", "D. Franchise users can have multiple roles in the hierarchy."], "a": ["C"]}, {"i": 42, "q": "It has been determined that integration with an external system is required, as the data needed by a wealth management client resides in another system. This data will be sent from the external system via an API, and Salesforce needs to be configured in preparation for the data.\nWhich two items should be configured?", "o": ["A. Objects and fields to store the data", "B. A flow to get the data into Salesforce", "C. A Lightning web component to restrict data from users", "D. An integration User and Integration Profile to enable the connection"], "a": ["A", "D"]}, {"i": 43, "q": "In Financial Services Cloud, what is the criteria for commas and symbols to be displayed correctly on the Financial Account Summary component?", "o": ["A. User currency must match org default currency.", "B. Account currency must match org default currency.", "C. User's locale must match user's currency.", "D. User's locale and language must match user's currency."], "a": ["C"]}, {"i": 44, "q": "A wealthy client owns a boutique shoe store called Smith's Shoes. Their financial advisor would like to add this relationship to the Financial Services Cloud (FSC) to track the complete picture of relationships related to the wealthy client's household.\nWhich three options should the Financial Services Cloud consultant use when mapping this relationship in FSC?", "o": ["A. Account Account Relationship object", "B. Account Contact Relationship object", "C. Account object - Household record type", "D. Contact object", "E. Account object – Business record type"], "a": ["A", "C", "E"]}, {"i": 45, "q": "A financial services company needs to capture a new type of referral that has different required fields than what is currently configured inthe org.\nWhich three steps should the administrator take to configure Financial Services Cloud correctly based on the scenario?", "o": ["A. Assign the record type to users.", "B. Create a new record type Referral' on the Lead object.", "C. Create a new referral record type mapper record.", "D. Create a custom Referral object.", "E. Update the lead page layout."], "a": ["A", "B", "E"]}, {"i": 46, "q": "A financial institution is concerned about contacting clients or sharing their data when they have requested not to be contacted.\nWhich action should the consultant take in Financial Services Cloud to address the\ninstitution's concern?", "o": ["A. Integrate the Consent object with their Consent Platform to track it in Salesforce.", "B. Hide the client's contact information and add an approval process for allowing a user to access it to contact the client.", "C. Implement Consent Management for Financial Services Cloud.", "D. Enable and implement the appropriate Regulation checkbox on the client record to track their request."], "a": ["C"]}, {"i": 47, "q": "Which three related lists are visible within Actionable Relationship Center associated with the Account object?", "o": ["A. Cases", "B. Financial Holdings", "C. Household Financial Accounts", "D. Notes and Attachments", "E. Client Financial Goals"], "a": ["B", "C", "E"]}, {"i": 48, "q": "A consultant is looking to create a guided screen to be used by customer service agents answering the phone to authenticate the caller and positively identify them. The agent will ask the caller to provide their full name and the last four digits of their social security number, which is not stored in Salesforce. The agent will enter the provided information into a form, and upon clicking submit, a web service call is made to an external authentication service to authenticate the caller.\nWhat should the consultant do to fulfill the needed requirements?", "o": ["A. Create a screen flow.", "B. Create a Lightning web component.", "C. Create a Canvas application for the Authentication module.", "D. Create an Omni Script flow."], "a": ["A"]}, {"i": 49, "q": "A regional bank is implementing Financial Services Cloud (FSC). Today, relationship managers receive email reminders 2 days, 2 weeks, and 2 months after a new customer opens their first bank account to contact the customer for feedback. In addition, the bank wants the ability for relationship managers to track and report on progress in FSC.\nWhat should the administrator do when designing the future state business process using FSC features?", "o": ["A. When creating an account, create an action plan with tasks to follow up in 2 days, 2 weeks, and 2 months.", "B. When a lead or referral is converted, create an action plan with tasks to follow up in 2 days, 2 weeks, and 2 months.", "C. When an account status is changed to \"Customer” create an action plan with tasks to follow up in 2 days. 2 weeks, and 2 months.", "D. When an account status is changed to \"Customer\", send emails to the Account Owner to follow up in 2 days, 2 weeks, and 2 months."], "a": ["C"]}, {"i": 50, "q": "Cumulus Bank wants to use Interactions to capture conversations that investment bankers have with their clients. Due to the sensitive nature of the interactions, the bank needs to carefully limit access to the detailed notes for certain groups. Basic information about attendees and meeting dates is not sensitive.\nWhich three options should a consultant recommend?", "o": ["A. Enable Compliant Data Sharing for Interactions.", "B. Enable Compliant Data Sharing for Interaction Summaries.", "C. Disable Role-Hierarchy-Based Sharing for Engagement Interactions.", "D. Use Interaction Summary Participants to provide the right access to individuals or groups.", "E. Disable Role-Hierarchy-Based Sharing for Interaction Summaries."], "a": ["B", "D", "E"]}, {"i": 51, "q": "A wealth management firm is looking to start tracking its clients' hobbies for marketing purposes in Salesforce. Which Financial Services Cloud feature is most suitable for this?", "o": ["A. Interest Tags", "B. Alerts", "C. Topics", "D. Engagement Topics"], "a": ["A"]}, {"i": 52, "q": "Lake Tahoe Bank wants to onboard a client digitally and without asking the client for information that the bank already has on file. The process has multiple steps and can have branching (conditional) logic that asks for different information depending on the responses. Which Salesforce feature should be used for this digital onboarding process?", "o": ["A. action Plans", "B. Financial Goals", "C. Actionable Relationship Center", "D. Flows"], "a": ["D"]}, {"i": 53, "q": "Which three record type options should an advisor configure for a Lead object configuration?", "o": ["A. Referral", "B. Opportunity", "C. General", "D. Adjustments", "E. Retirement Planning"], "a": ["A", "C", "E"]}, {"i": 54, "q": "The Salesforce Administrator at Lake Tahoe Bank is asked at make modifications to the Salesforce org to allow for more than one people being joint owners on a Financial Account. What will be the recommended approach to model this requirement?", "o": ["A. Map the primary owner and one joint owner to the Financial Account, because FSC, supports only two joint account owners.", "B. Map additional owners using the Financial Account Role.", "C. Map additional owners using the Actionable Relationship Center.", "D. Create lookup fields on the Financial Account object to support additional owners"], "a": ["B"]}, {"i": 55, "q": "A financial services company would like its users to be able to relate two business accounts.\nWhat should the administrator configure to meet the requirement?", "o": ["A. Create a new Contact Reciprocal Role for the required value.", "B. Update the Role picklist on the Account-Account Relationship object with new value.", "C. Create a new Account Reciprocal Role for the required value.", "D. Update the Role picklist on the Account-contact Relationship object with new value."], "a": ["B"]}, {"i": 56, "q": "Which three standard fields are available to track a customer's retirement gial progress?", "o": ["A. Contributions", "B. Actual value", "C. Total Value", "D. Target value", "E. Target Date"], "a": ["B", "D", "E"]}, {"i": 57, "q": "What 2 considerations should the Salesforce Administrator review before implementing Flow for customer onboarding?", "o": ["A. Use Field Level Security on Milestones", "B. Flow for Financial Service Cloud is not available for the Individual Object Model.", "C. Flow Screen Input Components can only be used in Financial Service Cloud Flow Templates", "D. The Flow users require a Flow Permission Set License."], "a": ["A", "B"]}, {"i": 58, "q": "Jen, the Financial Advisor at Lake Tahoe Wealth Management Company wants to modify a published Action Plan to support an additional task she needs in order to complete an annual review for a client. How should Jen do this?", "o": ["A. Use the 'task creator' tool to create a new task and associate with the existing Action Plan", "B. Contact her Salesforce Administrator and get her to make the change to the Action Plan for her.", "C. Use the Action Plan item feature to add an additional task to a published Action Plan.", "D. Create an independent Task not related to original Action Plan"], "a": ["C"]}, {"i": 59, "q": "The investor relations director of a large insurance company just published a press release after the company's Quarterly Earnings Call to report about its digital transformation implementing Salesforce Financial Services Cloud (FSC).\nWhich three value outcomes should the company's stakeholders expect?", "o": ["A. Achieved higher CSAT & NPS scores attributed to personalized customer experiences driven by shorter waits due to decreased average case handle times and improved self-service solutions via Einstein Bots for FSC", "B. Streamlined the entire deal lifecycle with FSC. leveraging relationship maps and interaction history in business development/discovery D to accelerate pipe management and research", "C. Improved customer onboarding experiences by fast-tracking and simplifying document tracking and approvals via FSC Action Plans", "D. Drove Advisor productivity with a daily task list, client life events, opportunities, and aggregated household information directly from D the FSC HomeT\\e", "E. Automated claims orchestration via straight through processing workflow rules from Omni Studio with minimal human intervention from insurance adjusters or underwriters, allowing claims to be completed faster and at scale"], "a": ["A", "C", "D"]}, {"i": 60, "q": "A consulting firm is asked to add Events and Milestones to a Lightning record page to give financial advisors deeper insights into their customers' lives.\nWhat should the consultant configure to enable advisors to capture Once-in-a-Lifetime events and, at the same time, prevent users from accidentally creating more than one event of such an event type?", "o": ["A. Once-in-a-Lifetime event types", "B. Special event types", "C. Single event types", "D. Unique event types"], "a": ["D"]}, {"i": 61, "q": "Which Salesforce Financial Services Cloud feature enables financial advisors to track and manage client accounts?", "o": ["A. Financial accounts management", "B. Performance reporting", "C. Client onboarding", "D. Opportunity management"], "a": ["A"]}, {"i": 62, "q": "Planter Farm Credit Union provides loan and insurance products to farmers who operate individually as well as in collaboration with other neighboring farms & farmers. The collaboration can be seasonal or for a limited timeframe. What construct in Financial Services Cloud is most appropriate to represent such collaborative customer business operations?", "o": ["A. Contact-Contact Relationship", "B. Custom Relationship Group", "C. Account with Record Type = Business", "D. Standard Household"], "a": ["B"]}, {"i": 63, "q": "Lake Tahoe Bank has duplicate client records in their current CRM system because they come from a different systems of record. Any changes made in Salesforce should be updated in the source system. What can a Salesforce Administrator do to help bankers get a consolidated view of the individual in the Financial Services Cloud?", "o": ["A. Leverage Financial Services Cloud Relationship Groups to link duplicate client records and create a consolidated view.", "B. Implement deduplication rules in Salesforce and let the integration handle the updates to the source system.", "C. Create a custom Person Account hierarchy to link duplicate client records.", "D. Create custom components to provide a single view of the client.", "E. Link individuals using related contacts to link duplicate client records"], "a": ["A"]}, {"i": 64, "q": "Cumulus Bank has implemented Compliant Data Sharing in Financial Services Cloud. Which two things happen when an opportunity record that has opportunity participants with associated share table entries is set to Private?", "o": ["A. The share table records are deleted.", "B. Share table records need to be manually deleted.", "C. All opportunity participant records are delete", "D. The opportunity participant records are not deleted."], "a": ["A", "D"]}, {"i": 65, "q": "A consultant is building an agent console for an insurance company using Flex Cards to provide a 360-degree view of its customers. An Integration Procedure will be used to retrieve Account, Opportunity, and Contract data. The agent wants the following information displayed:\n* Account information including account name, phone, and website\n* Active opportunities related to the Account\n* Active insurance policies related to the Account\n* The ability to view and renew policies\nHow should the consultant design the Flex Cards to meet these requirements?", "o": ["A. Parent Flex Card with single Child and Card Actions", "B. Parent Flex Card with multiple child Flex Cards and Card Actions", "C. Parent Flex Card with multiple children and different Card States", "D. Parent Flex Card with single Child and multiple Card States"], "a": ["B"]}, {"i": 66, "q": "Which two statements are true about Group Membership in Financial Services Cloud?", "o": ["A. Group Membership defines the role of the member within the Group.", "B. With Group Membership settings you can define if a Group is the member's primary Group.", "C. With Group Membership settings you can define who is the primary and who is the secondary member within the Group.", "D. Group Membership is modeled using the Account-Group Relationship object."], "a": ["A", "B"]}, {"i": 67, "q": "Cumulus Cloud Bank is asking the consultant to explain some tools available to integrate Salesforce into several of its back-end/core systems.\nWhich three capabilities should a consultant recommend?", "o": ["A. Industry Integration Solutions with the MuleSoft Any point Platform", "B. Data Processing Engine", "C. Omni Studio Integration Procedures", "D. Data Consumption Framework", "E. Omni Studio DataRaptors"], "a": ["A", "C", "E"]}, {"i": 68, "q": "What are the three building blocks of Flow Orchestration?", "o": ["A. Steps", "B. Blocks", "C. Stages", "D. Processes", "E. Work Items"], "a": ["A", "C", "E"]}, {"i": 69, "q": "How are identification documents, other assets, liabilities, goals, and revenue modeled, in an existing Financial Services Cloud org using the individual account model?", "o": ["A. An administrator is logged in to Data Loader with their own credentials to insert new Business Account records into their Salesforce environment. They forget to specify the Account Owner field in the import file.", "B. Assuming there are no other issues, what should happen when the administrator uploads the import file? The Attachment object is used to represent other assets, liabilities, and goals. In the individual model, these attachments are related to the Account object.", "C. Custom objects are used to represent other assets, liabilities, and goals. In the individual model, these objects are related to the Account object.", "D. Document, Note, and Attachment objects are used to represent other assets, liabilities, and goals. In the individual model, these objects are related to the person account."], "a": ["B"]}, {"i": 70, "q": "Which three permission sets grant access or extend permissions for record alerts in Financial Services Cloud (FSC)?", "o": ["A. Omni Studio Admin permission set", "B. FSC Standard permission set", "C. FSC Foundations permission set", "D. FSC Basic permission set", "E. Omni Studio User permission set"], "a": ["B", "C", "E"]}, {"i": 71, "q": "A banking client currently manages its onboarding process manually with paper forms. To optimize the process, the client wants to digitize and automate as much as possible. The bank wants its clients to manage the forms in a portal and leverage e-signatures for processing.\nWhich three steps are needed to document this requirement following the discovery session?", "o": ["A. Document the business process flows.", "B. Design the solution using the Financial Services Cloud components.", "C. Create a visual flow diagram.", "D. Understand the journey the multiple personas involved in the process.", "E. Determine the best e-signature solution to use."], "a": ["A", "D", "E"]}, {"i": 72, "q": "Lake Tahoe Bank would like to capture their commercial customers in FSC. A commercial customer can be owned by multiple groups. How can Lake Tahoe Bank SF Admin configure FSC to capture and display commercial customer and its parent company ? (3 correct answers)", "o": ["A. Add the Business record type to the Group record type mapper", "B. Capture the majority owner as parent account using Account hierarchy", "C. Leverage Groups to capture the majority owner and Account hierarchy to capture minority owner", "D. Enable Relationship Group Hierarchy in Custom Metadata", "E. Link multiple owners to the business entity as a Group"], "a": ["A", "C", "E"]}, {"i": 73, "q": "When importing records from a system outside of Salesforce, which ID should be used to prevent the data import from creating duplicates?", "o": ["A. User ID", "B. Data Load ID", "C. External ID", "D. Org ID"], "a": ["C"]}, {"i": 74, "q": "A Financial Services Cloud (FSC) administrator is setting up a permission set for Actionable Relationship Center. Which license should the administrator select on the Permission Set setup page?", "o": ["A. FSC Standard", "B. FSC Basic", "C. Omni Studio", "D. FSC Extension"], "a": ["A"]}, {"i": 75, "q": "During a project's design phase, a consultant must provide a Financial Services Cloud solution that can support Compliant Data Sharing (CDS). What are three things the consultant should consider regarding CDS?", "o": ["A. Participant Roles provide another way to grant data access without overwriting sharing behavior from existing sharing features.", "B. A financial services company wants to track different categories of financial accounts in its org. Relationship managers must be able to see all of these financial accounts in one place on the customer's Account record page grouped by categories. Which three steps should an administrator take to configure the Financial Account object and the Account Lightning record page to meet the design?", "C. Compliance managers and Salesforce administrators can enable CDS for Account and Opportunity objects.", "D. Role Hierarchy-based sharing is disabled by default in CDS.", "E. In a standard Salesforce org, Role Hierarchy for Account and Opportunity objects is enabled by default and can't be turned off."], "a": ["A", "C", "D"]}, {"i": 76, "q": "A retail bank is using Financial Services Cloud to support its operations. The bank has received complaints that its clients' documentation is often submitted late and when clients call, customer service agents are struggling with multiple systems to determine where the documentation is. Which solution should a consultant suggest the client explore?", "o": ["A. A Marketing Cloud integration to manage client communications", "B. An APEX solution to leverage the Send Mail capabilities of Salesforce", "C. Process Builder to create automated document requests for missing items", "D. The Send Documents flow for Retail Banking"], "a": ["D"]}, {"i": 77, "q": "Lake Tahoe Bank branch manager Sue Barry wants to encourage all Personal Bankers to use Action Plans to capture repeatable tasks and automate the task sequences, improving collaboration and productivity. Which three of the following statements about Action Plans are true?", "o": ["A. When you work with Action Plans, you first create Action Plan Templates", "B. Action Plans require a monthly license fee per user", "C. Action Plans can be used to schedule appointments with the Bankers", "D. Action Plans make it easy to create reports and dashboards, so you can monitor progress and ensure compliance", "E. Action Plans can be used to automatically assign task owners and deadlines for specific client engagements"], "a": ["A", "D", "E"]}, {"i": 78, "q": "Our Personal Banker Hank Burton is learning to use Action Plans to ensure compliance in the client onboarding process. Where can Hank see Action Plan Tasks? (2 options)", "o": ["A. Hank will be able to see the Action Plan tasks on the related list of the Account page layout.", "B. Hank will be able to see the Action Plan Tasks assigned to him on the standard Salesforce task list.", "C. Once the Action Plan is assigned, Hank can see the related Tasks on the Timeline.", "D. Hank will be able to see the Action Plan Tasks assigned to him on his calendar."], "a": ["A", "B"]}, {"i": 79, "q": "If a client is associated with more than one Household or Group, where will this clients records get rolled up to?", "o": ["A. to the household with the client's primary address", "B. to all the parent households and groups", "C. to the household selected by the advisor for record rollups.", "D. to the Household where the client is the primary member"], "a": ["C"]}, {"i": 80, "q": "What capability included in the Financial Services Cloud license can assist bankers in focusing on the most promising referrals?", "o": ["A. Referral Approval Processes", "B. Intelligent Need-Based Referrals and Scoring", "C. Einstein Referral Scoring for Financial Services Cloud", "D. Referral Routing Rules"], "a": ["B"]}, {"i": 81, "q": "Personal Banker Hank Burton is questioning his Referral Score shown in Salesforce Financial Services Cloud.\nWhen is the Referral Score updated?", "o": ["A. The Referral Score updated when a referral is convened to an Opportunity or closed.", "B. The Referral Score updated when a lead is created using the referral record type.", "C. The Referral Score updated when a referral is assigned from the queue to a user.", "D. The Referral Score updated when an opportunity associated with the Referral is Closed Won"], "a": ["D"]}, {"i": 82, "q": "A client has called their Financial Advisor to open an Education Savings Account for their first child. What 2 steps should the Financial Advisor take in the Financial Services Cloud App to capture that information?", "o": ["A. Create a Life Event for the birth of the child and a Referral for the Education Savings Account", "B. Create a case and include the target Savings amount for the Education Savings Account and relate the case to the child's Person Account.", "C. Create a Referral for the Banker for an Education Savings Account", "D. Create a Life Event for the birth of the child and a Financial Goal for the Education Savings Account", "E. Create two Life Events, one for the birth of the child and one for the Education Savings Account."], "a": ["A", "D"]}, {"i": 83, "q": "A wealth advisor is trying to relate a client to their attorney using the Add Contact option on the relationship tree but can't find any reciprocal roles displayed in the related role lookup. What are two reasons for this?", "o": ["A. The user should be using the Member Relationship button under the Actionable Relationship Center.", "B. Reciprocal roles have not been created in the org.", "C. Sharing rules have not been set up for reciprocal roles.", "D. The user should be using the Edit Group button to access reciprocal roles."], "a": ["B", "D"]}, {"i": 84, "q": "Lake Tahoe Bank, an existing Salesforce customer, is planning to implement Financial Services Cloud. Their Salesforce Admin is considering whether to use a new Salesforce org or upgrade the existing org. Which three of the considerations below indicate that a new Salesforce org is the better choice?", "o": ["A. The bank wants to use this project as an opportunity to retire customization", "B. The current implementation is using a product-centric view and the bank wants to move to a customer- centric view.", "C. Data migration is a big concern The current org has a large amount of data and the Bank wants to minimize data migration efforts.", "D. The bank has limited redesign opportunities for business capabilities.", "E. Existing business capabilities and processes can be redesigned to deliver a higher business impact"], "a": ["A", "B", "E"]}, {"i": 85, "q": "A financial services company wants to use the Financial Services Cloud Person Account data model. The company needs two Person Account record types, one to represent Individual customer and one to represent Individual independent advisors that send referrals.\nWhat should the administrator do to set up the new record types?", "o": ["A. Create custom fields on the Person Account object.", "B. Configure Individual Record Type Mapper\" custom metadata.", "C. Create a record type on the Contact object.", "D. Enable \"Use Person Account\" custom setting."], "a": ["B"]}, {"i": 86, "q": "For which three objects are Rollup By Lookup (RBL) summaries are available?", "o": ["A. Life Events", "B. Financial Accounts", "C. Assets and Liabilities", "D. Contacts", "E. Claims"], "a": ["B", "C", "D"]}, {"i": 87, "q": "How can the Salesforce Administrator make sure that highly sensitive Life Events or Business Milestones will not be shown until the event actually happened?", "o": ["A. Hide the Event or Milestone on the Events & Business Milestones Lightning Component page properties.", "B. Delete the value from the Event Type picklist on the Life Event Object or the Milestone type on the Business Milestone object", "C. Remove the Event or Milestone from the Lightning Component in the Developer Console.", "D. Life Events are part of the FSC managed package, therefore the Salesforce Admin must contact Salesforce Support to remove the Event from the Lightning Component."], "a": ["A"]}, {"i": 88, "q": "Lake Tahoe Bank allows more than two owners on Financial Accounts. The Salesforce Admin wants to make sure that balances are rolled up to all joint owner's primary Households. Which 2 options does the Salesforce Admin have to accomplish this?", "o": ["A. Enable all RBL (Rollup By Lookup) rules to ensure the balances are rolled up to the household level.", "B. Enable the 'Enable Rollup Summary' in custom settings", "C. Create custom RBL (Rollup By Lookup) rules to rollup the joint owner balances.", "D. Disable RBL (Rollup By Lookup) rules that rollup balances using joint owner on Financial Account.", "E. Enable RBL (Rollup By Lookup) rules that rollup balances using Financial Account Role for joint owners."], "a": ["C", "E"]}, {"i": 89, "q": "An advisor is setting up a Household in Financial Services Cloud for their new clients, Oliver and Macie Dogging ton. The advisor created a Person Account record for both Oliver and Macie, and a Household record for the Dogging ton household. While creating the Household group, the advisor attempted to input the below information but received an error.\nMember Name: Oliver Dogging ton\nRole in Group: Client\nPrimary Member: Enabled\nPrimary Group: Enabled\nActivities and Objects to Roll Up: All\nMember Name: Macie Dogging ton\nRole in Group: Spouse\nPrimary Member: Enabled\nPrimary Group: Enabled\nActivities and Objects to Roll Up: All\nBased on the information provided, what caused the error that the advisor received?", "o": ["A. Primary Member - two individuals cannot be designated as the Primary Member of the same Household.", "B. Spouse is not a valid Role within a Group.", "C. Primary Group -two individuals cannot designate the same Household as their Primary Group.", "D. Activities and Objects to Roll Up - two individuals cannot designate their activities to roll up to the same Household."], "a": ["A"]}, {"i": 90, "q": "The Salesforce Administrator for Lake Tahoe Bank is receiving a report that a members Financial Account Balances are not adding up to the Financial Summary field in the related Household.\nWhich two steps should the admin take to troubleshoot the issue?", "o": ["A. Ensure the Primary Group flag in the Account record is checked.", "B. Ensure Roll Up By Lookup Configuration is Active", "C. Ensure a Roll Up By Lookup batch job is scheduled to run every 15 mins.", "D. Ensure that the member is the Primary Member in that Household", "E. Ensure the reported Household is the Primary Group for the member"], "a": ["B", "E"]}, {"i": 91, "q": "The Salesforce Admin at Lake Tahoe Bank is implementing Financial Services Cloud and wants to roll up customer data at the client and group levels. What functionality can Rollup By Lookup (RBL) provide for this requirement?", "o": ["A. RBL calculations can not be disabled when importing data into your Salesforce org.", "B. An RBL rule displays summary calculations of financial account information, such as account balances.", "C. When you edit a financial account record or primary Group membership, the Rollup By Lookup(RBL) configuration updates the corresponding RBL summaries at the client and Group levels.", "D. Rollups for multiple joint owners are not supported", "E. Rollup By Lookup (RBL) displays associated records for Financial Accounts. Financial Goals, and Opportunities."], "a": ["B", "C", "E"]}, {"i": 92, "q": "Where should a Salesforce Administrator go to add custom icons to the Life Events and Business Milestones?", "o": ["A. Lightning Page Layout > Life Events and Business Milestones Lightning Component > Page Icon Properties", "B. Setup > Custom Code > Static Resources", "C. Setup > User Interface > icons > Life Events and Business Milestones", "D. Setup > Financial Services > Icons > Life Events and Business Milestones"], "a": ["B"]}, {"i": 93, "q": "The Salesforce Admin at Lake Tahoe Wealth Management Company wants to ensure that the advisors at his firm can quickly see the most important client data in the Actionable Relationship Center (ARC). What must the Admin configure for each object to display the most important fields on the side panel of ARC?", "o": ["A. Compact Layout", "B. Page Layout", "C. Search Layout", "D. Lightning Record Pages", "E. Field Sets"], "a": ["A"]}, {"i": 94, "q": "To access all Financial Services Cloud (FSC) functionalities available out of the box, a consultant must install the FSC Managed Package and the Unmanaged Extension Packages.\nWhich two functionalities are included in the FSC Unmanaged Extension Packages?", "o": ["A. Custom objects to track Financial Accounts and Household", "B. The Commercial Banking dashboard", "C. Field sets that configure how fields display in the client and household profiles", "D. Predefined list views of clients and households"], "a": ["B", "C"]}, {"i": 95, "q": "Permission set licenses incrementally entitle users to access features that are not included in their user licenses.\nWhich three Permission Set Licenses give users access to Financial Services Cloud features?", "o": ["A. Financial Services Cloud Standard", "B. Action Plans", "C. Lightning Scheduler Resource", "D. FSC Insurance", "E. Mortgage"], "a": ["A", "B", "D"]}, {"i": 96, "q": "Lake Tahoe Bank has branch offices in many countries around the world and they are planning to roll out Financial Services Cloud. Which of the 2 considerations does the Salesforce Admin have to keep in mind when it comes to dealing with multiple currencies?", "o": ["A. For each user, the user currency must correspond to the default currency for the user's locale", "B. The Salesforce Admin can enable or disable multiple currencies if needed", "C. When filtering by currency values in reports or list views, users must specify a currency ISO code, such as USO or GBP. before the value.", "D. When multicurrency is enabled in FSC. advanced currency management is also available"], "a": ["C", "D"]}, {"i": 97, "q": "Cumulus Cloud Bank must provide its customer service staff with real-time access to\nCustomer accounts, including the ability to view current transactions and balances. As a result, the bank expects a high volume of concurrent users at peak times.\nWhich option is most suitable?", "o": ["A. Use the Data Consumption Framework to connect to the bank's middleware.", "B. Use Salesforce Connect with External Objects to expose tables from the bank's core systems, and use custom Lightning web components to surface them in the Salesforce Lightning Ul.", "C. Use Salesforce Connect with External Objects to expose tables from the bank's core systems, and use the standard user interface (Ul) components to surface the records in Salesforce Lightning Ul.", "D. Embed custom Lightning web components on the Account and Financial Account pages, and use custom Apex to make callouts to the core system services."], "a": ["D"]}, {"i": 98, "q": "A commercial loan due diligence process is handled by multiple individuals at Lake Tahoe Bank. Lake Tahoe Bank wants an easy way for managers to distribute the work, to understand the completion of the due diligence process per client and report on the performance of the department to show possible bottlenecks.\nWhat FSC feature can Lake Tahoe Bank use to track this process?", "o": ["A. Workflow Rules/Process Builder", "B. Action Plans", "C. Apex Triggers on the task object", "D. Flows"], "a": ["B"]}, {"i": 99, "q": "A Salesforce administrator updating a record page to add a Chatter component to the Action Plan Lightning record page is unable to find the Chatter components for selection.\nWhat is the reason for this?", "o": ["A. Feed tracking has to be enabled for the Action Plan object.", "B. Chatter has to be enabled for Action Plans via Chatter settings in setup.", "C. Salesforce is yet to roll out Chatter for the Action Plan object.", "D. Admin users have to be assigned the Action Plans permission set."], "a": ["A"]}, {"i": 100, "q": "A large insurance company hired a consulting firm to improve customer experiences for customers that want to complete standard processes online, such as getting an insurance quote or submitting a claim.\nWhich three standard Insurance Platform components can digitally enable these core insurance operations?", "o": ["A. Policy Administration", "B. Claims Management", "C. Quote, Rate, and Apply", "D. Quote Creation Toolbox", "E. Mobile Claim Submission"], "a": ["A", "B", "C"]}, {"i": 101, "q": "Our Personal Banker Hank Burton wants to encourage his customers to provide required documents for a loan application. He creates Document Checklist Items that help his customers to manage file uploads to speed up loan approval. For which of the following records does Salesforce support Document Checklist Items out of the box? (Choose Three)", "o": ["A. Contact", "B. Lead", "C. Account", "D. Residential Loan Application", "E. Opportunity"], "a": ["C", "D", "E"]}, {"i": 102, "q": "A financial services company is migrating a legacy customer relationship management system to Financial Services Cloud (FSC). The company is requesting that its consulting partner introduce specific customer interaction features mapped to its business processes.\nWhat should the consultant consider when introducing the FSC features?", "o": ["A. If there is a business process for tracking the customer life events and milestones, and timely reminding of opportunities, the Action Plan component is recommended to use.", "B. If there is a business process for limiting role-based data visibility, the Interaction Summaries component is recommended to use.", "C. If there is a business process for taking detailed notes for client meetings and adding action items, the Action Plan component is recommended to use.", "D. If there is a business process for showing common interests and needs across the company's clients, the Interaction Summaries component is recommended to use."], "a": ["C"]}, {"i": 103, "q": "To access Financial Services Cloud Lightning Components \"My Domain\" must be enabled.\nHow does the System Admin accomplish this?", "o": ["A. Register a subdomain using the My Domain wizard and then deploy it", "B. Open a case with Salesforce Support", "C. Enable Communities", "D. Go to Custom Settings and edit the Industries Settings"], "a": ["A"]}, {"i": 104, "q": "What feature does a Salesforce Administrator need to enable so users can see all the referrals for the members of a group?", "o": ["A. Referral Scoring", "B. Referrals Rollups", "C. Group Member Referrals", "D. Referral Group Process Builder"], "a": ["B"]}, {"i": 105, "q": "A major Japanese bank is expanding geographically and opening additional branches in Asia.\nAs such, they hired a regional consulting firm to implement Financial Services Cloud (FSC) locally.\nWhat are the two expectations from implementing multi language features in FSC?", "o": ["A. Referrals in Singapore and Hong Kong will be shared in English, but in Macau, referrals will be shared in Portuguese.", "B. Bankers in Japan have been accessing FSC in Japanese, but the new bankers in China will be accessing FSC in Chinese.", "C. In Tokyo branches, the names of the Account, Prospect & Contact are in Japanese, but the package Advisor, Personal Banker, D Relationship Manager, and Client Associate profiles are in English.", "D. In Seoul, South Korea, the branch managers will be reviewing their FSC dashboards every morning in Korean, while their colleagues in \" Shanghai, China, will be doing so in Chinese."], "a": ["B", "D"]}, {"i": 106, "q": "Rachel Addams belongs to two households:\n1. The Addams household where Rachel lives with her spouse, Nigel Addams. Rachel is the client and, as such, is listed as the primary member of that household. This household is also Rachel's primary group.\n2. The Symonds household. This household belongs to Rachel's parents, but Rachel manages their finances.\nRachel is considered the beneficiary of this household.\nIn addition, Rachel's household has a related account, the Addams Charitable Trust, and a related contact, Ivan M. Kohl, attorney at law.\nWhat should be the relationships between the parties when the Financial Services Cloud consultant sets up Rachel's person account?\n1.Primary Group Household - Addams Household\nPrimary Member - Rachel Addams\nSpouse - Nigel Adams\nTrustee - Addams Charitable Trust\nHousehold - Symonds Household\nPrimary Member - Neil Symonds\nBeneficiary - Rachel Addams\nRelated Accounts - Addams Charitable Trust\nRelated Contacts - Ivan M. Kohl\nA financial services company needs to transform the individual data model to person accounts in Financial Services Cloud (FSC), and its consulting partner is helping decide the sequence of the user stories in the design phase.\nWhat should the implementation team do as the top priority during planning?", "o": ["A. Perform a data backup.", "B. Enable a person account in a sandbox.", "C. Configure Person Account record types.", "D. Enable person accounts in FS"], "a": ["A"]}, {"i": 107, "q": "Financial Services Cloud (FSC) contains a number of custom objects to model a client's financial information, and each object can be configured to appear as tabs in your org. For example, if a consultant wanted to create a financial goal for a customer, they could use the Financial Goal object in FSC.\nWhat are three objects in FSC?", "o": ["A. Billing", "B. Financial Holding", "C. Financial Goal", "D. Inheritance", "E. Revenue"], "a": ["B", "C", "E"]}, {"i": 108, "q": "Early in the discovery and solution meetings, it was determined that the client would\nprimarily use out-of-the- box Financial Services Cloud (FSC) objects and components with minimal custom objects needed. In addition, it was decided that records should be private, but the managerial chain would require visibility into all their direct reports' records.\nWhich three security settings must be set up in Salesforce to meet these requirements?", "o": ["A. Only Custom Profiles should be configured and assigned to all users to use FSC components and field- level security. The ^ administrator should configure custom profiles and assign them to all users", "B. Organization-wide sharing defaults should be set to meet sharing requirements for all objects in use.", "C. Each object sharing should be set up, explicitly sharing each user's record with the manager.", "D. The Role Hierarchy in setup should be configured to allow for managers to automatically see records of those under them.", "E. Custom permission sets and out-of-the-box FSC permission sets should be configured or updated and assigned to all users for the use of FSC components and field-level security."], "a": ["B", "D", "E"]}, {"i": 109, "q": "Which 3 out of the box capabilities come with Financial Services Cloud Lead & Referral Management?", "o": ["A. Referral Conversion", "B. Assigning a Referral", "C. Round Robin Referral Routing", "D. Accepting a Referral", "E. Referral Automated Approvals"], "a": ["A", "B", "D"]}, {"i": 110, "q": "A bank needs help with many of its processes taking too long to complete. Many of its challenges are due to issues with handoffs between teams. The challenges also include users transferring control to the wrong person or team or forgetting to transfer it at all.\nWhich two Financial Services Cloud capabilities should help address these challenges?", "o": ["A. Action Plans", "B. Financial Accounts", "C. Omni Scripts", "D. Roll-up Summaries"], "a": ["A", "C"]}, {"i": 111, "q": "Lake Tahoe Bank needs to conduct periodic reviews with their customers to review credit & debit card usage, review account payables and discuss credit needs. The bank wants to ensure such activities are tracked and exceptions are reported &followed up on in a timely manner. How can Financial Services Cloud support these requirements?", "o": ["A. Run a nightly process to create tasks and assign them to account owners for follow-ups", "B. Train account owners to create required tasks periodically and setdue dates for tracking.", "C. Use Lightning Scheduler to periodically schedule tasks for account owners.", "D. Create an Action Plan Template with associated pre-determined Tasks and automate the periodical creation of Action Plans for customer accounts."], "a": ["D"]}, {"i": 112, "q": "The system administrator team at a retail consumer bank just received data migration instructions and guidance on Data Loader from their Salesforce architect to upgrade the existing Service Cloud org to a Financial Services Cloud (FSC) org.\nIn what order should the Salesforce objects be uploaded during an FSC data migration?", "o": ["A. 1. Accounts and contacts2. Financial accounts3. Account groups and households", "B. 1. Financial accounts2. Accounts and contacts3, Account groups", "C. 1. Accounts and contacts2. Households3. Financial accounts", "D. 1. Households2.Financial accounts3. Person accounts"], "a": ["A"]}, {"i": 113, "q": "Which three of the following statements are correct about the Actionable Relationship Center Manager (ARC)?", "o": ["A. To enable users to see the ARC, you will need to add the component for ARC to the page layout.", "B. ARC displays up to 5 related lists that have a configured compact layout.", "C. ARC is certified to work with Person Accounts and Individual Accounts.", "D. The Salesforce Admin has to create a permission set for granting access to the ARC - FSC Lightning component.", "E. The Association Type picklist controls the account-account relationship that display in the ARC."], "a": ["A", "B", "E"]}, {"i": 114, "q": "A consultant is working with a new customer and has gained a firm understanding of their business processes and systems in preparation for implementing Salesforce Financial Services Cloud.\nWhat should the consultant create as a deliverable for the current state business process?", "o": ["A. Word document telling the story of the process from the user's perspective", "B. An Excel spreadsheet with steps of the process as rows, and systems and personas in columns", "C. An end-to-end visual map of the process using personas, systems, inputs, and outcomes", "D. A Power point deck with screenshots of the current systems and callouts to what is happening on each slide"], "a": ["C"]}, {"i": 115, "q": "A bank recently sold its wealth management division and wants to improve its customers' digital experience.\nThe bank engaged Salesforce Professional Services to upgrade its existing Salesforce CRM to Financial Services Cloud and deliver its Bank of the Future vision.\nWhich three expected outcomes can serve as return on investment (ROI) justifications to the bank's chief financial officer (CFO)and investment committee?", "o": ["A. Unify and improve team collaboration by sharing and managing customer leads and referrals across multiple lines of business at the bank to drive customers' financial needs and deepen client relationships.", "B. Deliver connected and personalized digital experiences to the bank's customers thanks to a 360- degree view of its customer data consolidating multiple customer databases and sources from diverse channels at the bank.", "C. Simplify the client onboarding process with proper tools to streamline customer discovery and internal reviews through renewal.", "D. Manage policy holder's interactions with customer service agents intelligently through the underwriting process.", "E. Modernize client-advisor experiences from engagement to relationship management to effectively drive long-term, trusted relationships."], "a": ["A", "B", "E"]}, {"i": 116, "q": "Scott Adams calls his Personal Banker Hank Burton to apply for a loan to buy a boat. Hanks wants to refer Scott to the loan department, but the current process is manual and time-consuming.\nHank is asking the bank's System Administrator to automate Referral creation in Salesforce. How can the Admin speed up and simplify Referral creation?", "o": ["A. Write a trigger to create Referrals from a 'Create Referral* button.", "B. Use the Case process and create Cases with Case Type 'Referral'.", "C. Use Global Action To create Referrals.", "D. Use"], "a": ["C"]}, {"i": 117, "q": "Lake Tahoe Bank is migrating customer records from the Individual Model to Person\nAccounts. Which three steps should a Data Architect take to ensure a successful migration?", "o": ["A. Ensure Person Accounts is enabled on the org", "B. Configure your Person Account record types m the individual Record Type Mapper.", "C. Enable 'Individual to Person Account Migration' in Custom Settings.", "D. Use a CSV field to map PersonRecordTypeld to the Person Account RecordTypeld and use Data Loader to update Client Records", "E. Log a case with Salesforce to perform the conversion from the individual Model to Person Accounts."], "a": ["A", "B", "D"]}, {"i": 118, "q": "Which step is required to give a group of users access to a Financial Deal?", "o": ["A. Change organization-wide defaults (OWD) sharing on the Financial Deal object to Public Read/Write.", "B. Create a Financial Deal permission set and assign it to the users that should have access to Financial Deals.", "C. Share a financial deal record with a group by adding them as participants to the record from the Financial Deal Participants related list,", "D. Update Industries Settings to give users access to the Financial Dew object."], "a": ["C"]}, {"i": 119, "q": "Which three insurance processes are managed by the Policy Administration component?", "o": ["A. Payments", "B. Approvals", "C. Commissions", "D. Underwriting", "E. Endorsements"], "a": ["A", "B", "E"]}, {"i": 120, "q": "An insurance company aims to improve a call center's productivity. A detailed analysis discovered that agents spend a lot of time capturing data while adding and updating beneficiary details. Capturing premium payment details (payment date and frequency) is another time consuming task. Which action should a Financial Services Cloud consultant take to resolve the issue?", "o": ["A. Utilize Insurance Flow Templates.", "B. Create an Action Plan Template for capturing beneficiary data and payment information.", "C. Provide a better user interface by building Lightning web components for beneficiary data and payment information.", "D. Install an Insurance Data AppExchange package."], "a": ["A"]}, {"i": 121, "q": "How should developers configure customized nodes for display in the Actionable\nRelationship Center (ARC)?", "o": ["A. Reference the Lightning web component in the Display properties of the custom ARC relationship graph.", "B. Select Use Flex Card from the node Display tab to show the node in a Flex Card", "C. Reference the flex Card in the Display properties of the custom ARC relationship graph.", "D. Select Omni Script from the node Actions tab to show the node in an Omni Script."], "a": ["C"]}, {"i": 122, "q": "Lake Tahoe Bank is implementing Financial Services Cloud. The bank's new business processes require that Financial Advisors can add individuals to more than one Group or Household using Multiple Relationship Groups. Where do Admins enable Multiple Relationship Groups?", "o": ["A. Object Settings", "B. Custom Settings", "C. Lightning Page Editor", "D. Profiles"], "a": ["B"]}, {"i": 123, "q": "An investment bank client wants all its users to track client engagements with Interaction Summaries. In addition, those call logs need to be shared with specialists in other lines of business so they can assist in specific types of deals.\nWhich three Financial Services Cloud standard objects should be used to help accommodate these business requirements?", "o": ["A. Interaction Summary Participant", "B. Financial Deal Participant", "C. Participant Role", "D. Interaction Participant", "E. Opportunity Participant"], "a": ["A", "B", "C"]}, {"i": 124, "q": "A corporate investment banking associate at Cumulus Capital works with a trusted analyst to create pitch books, analyze market data, and generate reports. The banking associate is looking to capture sensitive deal information in Salesforce. They wish to share the deal information with the trusted analyst only, without giving access to Salesforce users up the management chain in the Role Hierarchy.\nWhat should a consultant do in Salesforce to build the required sharing model for sensitive deal data?", "o": ["A. Use the Opportunity object to capture the deal data and use manual sharing to grant the analyst access.", "B. Use the Financial Deal object to capture the deal data and use Compliant Data Sharing to grant the analyst access.", "C. Use the Financial Deal object to capture the deal data and use restriction rules to block user access above the banking associate in the Role Hierarchy.", "D. Use the Opportunity object to capture the deal data and use Compliant Data Sharing to grant the analyst access."], "a": ["C"]}, {"i": 125, "q": "An insurance company needs to ensure the record rollups aggregate information from related records for several objects in the Financial Services Cloud at a client or group level.\nWhat should the administrator configure to meet the requirement?", "o": ["A. To show all Primary Group member cases on a related list at the group level, the administrator should add Cases as a picklist value to the Rollup__c field on Account Contact Relationship.", "B. Client-level records are aggregated by setting up client-level rollups to all primary group members.", "C. When the administrator enables record rollups at the group level, all corresponding records are stamped with the Primary Group in the Rallup_c lookup field", "D. To show all Primary Group member opportunities on a related list at the group level, the administrator should add Opportunities as a picklist value to the Household__c field on Account Contact Relationship."], "a": ["C"]}, {"i": 126, "q": "A Bank of the Future customer calls the bank to update the address on their account. The call center agent handling the call needs to enter a new address into the system. The agent enters the new contact information using an Omni Script and then needs to generate a prefilled PDF with the new address that can be shared with the customer.\nWhich two Omni Studio tools should a consultant recommend to generate the prefilled PDF?", "o": ["A. Omni Studio Action Document Generation", "B. Calculation Procedure", "C. Data Raptor", "D. Integration Procedure"], "a": ["A", "C"]}, {"i": 127, "q": "Which three objects should a Financial Services Cloud administrator use when planning to use the Mortgage Data Model to integrate with external Loan Origination and Customer Onboarding applications to accurately track the pipeline?", "o": ["A. Assets & Liabilities", "B. Opportunity", "C. Case", "D. Account", "E. Financial Account"], "a": ["B", "D", "E"]}, {"i": 128, "q": "An asset management firm that is moving to Salesforce from its old CRM wants to be able to bring over its client data on drivers' licenses and passports. 55m 058 Which Financial Services Cloud object should a consultant recommend?", "o": ["A. Document Checklist Item", "B. Received Document", "C. Identification Document", "D. Identity Document"], "a": ["C"]}, {"i": 129, "q": "The Salesforce Admin of Lake Tahoe Wealth Management Company needs to update an existing, published Action Plan Template to accommodate a change in the firm's annual client review process. What steps should the Admin take to make that change?", "o": ["A. Edit the published Action Plan Template directly.", "B. Set the Action Plan Template to \"Inactive\" and then make changes to the template, as necessary.", "C. Clone the existing Action Plan Template and make any necessary changes on the new Action Plan Template."], "a": ["C"]}, {"i": 130, "q": "What benefits do Flows for Financial Services Cloud offer to support customer onboarding? (Choose Two)", "o": ["A. Flows enable customers to schedule appointments via customer communities, mobile apps. or websites.", "B. Flows provide step-by-step guidance for common service requests, such as change of address, or change of beneficiary, without the need to * navigate to different screens.", "C. Flows systematically capture and visualize important customer Life Events to drive more personalized and need-based engagements.", "D. Flows enable customers to book appointments with the nght specialist at the right time and place through self-service scheduling", "E. Flows enable customers to schedule appointments via customer communities, motxie apps. or websites."], "a": ["B", "E"]}, {"i": 131, "q": "Which three related lists are visible within the Actionable Relationship Center associated with the Account object?", "o": ["A. Household Financial Accounts", "B. Cases", "C. Client Financial Goals", "D. Financial Holdings", "E. Notes and Attachments"], "a": ["A", "C", "D"]}, {"i": 132, "q": "Lake Tahoe Bank's System Administrator is implementing intelligent Need-Based Referrals in Salesforce.\nReferrals are modeled on the Lead object. Which three Lead features can the System Admin use for Intelligent Need-Based Referrals?", "o": ["A. Lead Routing", "B. Web to-Lead", "C. Lead Assignment Rules", "D. Lead Approval", "E. Einstein Lead Scoring"], "a": ["A", "C", "E"]}, {"i": 133, "q": "During a Financial Services Cloud implementation at an insurance company, a consultant needs to design a broker data model for the broker web portal. The given requirements are:\n1. Brokers are treated individually, even if they are associated with the same company.\n2. Brokers should never have access to other brokers' data.\n3. Brokers can nominate their assistants to access the broker portal.\n4. An assistant can sometimes work for multiple brokers.\nWhich two considerations should the consultant consider regarding the data model?", "o": ["A. The Broker Assistant should be modeled as a Contact. Then, leverage Contact to Multiple Account features if this assistant needs to work for multiple brokers.", "B. Brokers should be modeled as Contact and the Broker company should be modeled as Account, even if they're a legal entity '-' individually.", "C. Brokers need to be modeled as Account and Contact individually, as each broker is a legal entity in Salesforce. Then, use a Group 1-1 Account to model their company.", "D. The Broker Assistant should be modeled as a Contact. Then, use Contact to Contact association if they need work for multiple D Brokers."], "a": ["A", "C"]}, {"i": 134, "q": "The Compliant Data Sharing (CDS) feature lets administrators and compliance managers configure advanced data-sharing rules so that they can improve compliance with regulations and company policies.\nWhich three things should be considered when implementing CDS in Financial Services Cloud (FSC)?", "o": ["A. To disable CDS for an object, any Participant Roles associated with that object must be deleted first.", "B. CDS in FSC allows record owners to grant access to their records to other FSC users.", "C. CDS can only be applied to FSC objects and Account and Opportunity objects.", "D. To get the benefits of CDS, administrators must set organization-wide sharing settings for supported objects to the Private access model.", "E. Users above the record owner in the Role Hierarchy and non-record owners with Edit access granted through CDS have the same ability/access as record owners,"], "a": ["B", "C", "D"]}, {"i": 135, "q": "Lake Tahoe Bank has been using Sales Cloud to support the business to consumer (B2C) activities. The VP of IT wants a better and more flexible data model that can support his B2C Banking use cases. He is considering upgrading to Financial Services Cloud, using Person Accounts. Which 2 of these statements are true for the Financial Services Cloud Person Account Data Model?", "o": ["A. Person Accounts can be merged with Business Accounts in Financial Services Cloud", "B. To share a Person Account record the admin will need to create sharing rules Account and Contact objects", "C. The Person Account record type can be used when a client is an agent for a broker firm that is doing business with the Financial Institution.", "D. The Person Account is a virtual object displaying data from Accounts and Contacts objects. It represents all aspects of the person and includes D data such date of birth or tax ID number.", "E. The Person Account model uses the standard Account object to hold all of the details about a person The Account object has been extended \" with custom fields and a Person Account Record Type"], "a": ["D", "E"]}, {"i": 136, "q": "How can the Salesforce Admin change the configuration to summarize Financial Goals at the household level?", "o": ["A. Add a custom Rollup By Lookup (RBL) rule.", "B. Financial Goal scan not be summarized at the household level.", "C. Create a formula field and add it to the Account page layout", "D. Update the selection in \"Activities & Objects to Roll Up' to include Financial Goals"], "a": ["D"]}, {"i": 137, "q": "During the design phase of a project, a consultant needs to provide a Financial Services Cloud (FSC) solution for a business requirement that forces a customer to answer a number of assessment questions to complete the onboarding process.\nWhat are three things to consider regarding Discovery Framework?", "o": ["A. Discovery Framework creates highly capable forms with integrations and advanced logic.", "B. Discovery Framework forms cannot be deployed to Communities,", "C. Discovery Framework is built based on Salesforce Flow.", "D. Discovery Framework can create both standard and hierarchical questions.", "E. FSC Discovery Framework allows archiving questions."], "a": ["A", "D", "E"]}, {"i": 138, "q": "A financial services company needs to add new values for how a customer can be related to a financial account. Which object/field should the administrator add new values on?", "o": ["A. Object: Financial Account Role; Field: Role", "B. Object: Financial Account; Field: Primary Owner", "C. Object: Financial Account; Field: Joint Owner", "D. Object: Account-Account Relationship; Field: Related Role"], "a": ["A"]}, {"i": 139, "q": "Cumulus Insurance's business processes are quite complex, and steps in the process may vary depending on the information captured.\nWhich three actions regarding functionality and features should a consultant suggest exploring to help guide Cumulus Insurance users through these processes?", "o": ["A. Build custom Lightning pages that correspond to each stage of the business process.", "B. Configure Dynamic Actions for Lightning pages.", "C. Enable In-App Guidance to provide walk-throughs.", "D. Use flows to remove the need for complex Lightning pages.", "E. Configure Dynamic Lightning pages."], "a": ["B", "C", "D"]}, {"i": 140, "q": "A financial services company has found that more than two-thirds of customer onboarding processes are manually done by client specialists, consuming large amounts of time and resulting in errors in the sales process. The company contacts a consultant to learn how to leverage Financial Services Cloud features to improve the current state.\nWhat should the consultant consider from a customer onboarding perspective?", "o": ["A. If the company struggles with the low efficiency of collecting data in questionnaires and meeting compliance with the company policies. Action Plan can be used to improve the current state.", "B. If the company struggles with the low efficiency of tracking required documents for its customers and creating templates for checklists. Discovery Framework is recommended to improve the current state.", "C. If the company struggles with the low efficiency of tracking required documents for its customers and creating templates for checklists, Action Plan is recommended to improve the current state.", "D. If the company struggles with the low efficiency of collecting data in questionnaires and meeting compliance with the company policies. Discovery Framework can be used to improve the current state."], "a": ["A"]}, {"i": 141, "q": "Cumulus Bank is migrating its CRM software from a legacy application to Salesforce Financial Services Cloud (FSC). The bank hired Salesforce Professional Services to configure/deploy the new Salesforce FSC org and migrate data.\nWhich order should a consultant follow when performing the data migrations?", "o": ["A. Individuals, then Financial Account Roles, then Financial Accounts, then Financial Account Transactions", "B. Individuals, then Financial Accounts, then Financial Account Roles, then Financial Account Transactions", "C. Financial Accounts, then Financial Account Roles, then Individuals, then Financial Account Transactions", "D. Financial Accounts, then Financial Account Transactions, then Financial Account Roles, then Individuals"], "a": ["B"]}, {"i": 142, "q": "Which three referral metrics are tracked with custom components included in Financial Services Cloud?", "o": ["A. Web to Lead Referrals", "B. Expressed interests", "C. My Top Referrers", "D. My Approved Referrals", "E. Referrals Assigned to me"], "a": ["B", "C", "E"]}, {"i": 143, "q": "A company wants to convert its Salesforce Financial Services Cloud implementation from using the individual account model to using person accounts.\nWhich three things should a consultant do to prepare for the conversion?", "o": ["A. Update all opportunities linked to individual account records to be owned by the individual account record's owner.", "B. Ensure each account. phone field in the individual account record is blank.", "C. Ensure all individual account records to be converted are only linked to exactly one contact record.", "D. Test out the conversion in a sandbox, including all integrations and customizations.", "E. Ensure each individual account to be converted is not a parent account of any other account records."], "a": ["C", "D", "E"]}, {"i": 144, "q": "Rachel is the primary member of the Adams household hired a new attorney. What type of relationship should the Wealth Advisor create in Financial Services Cloud for Rachel and her attorney before assigning the reciprocal role of \"Attorney\"?", "o": ["A. Create an Account-Contact relationship between the Adams Household and the attorney.", "B. Create an Account-Account relationship between the Adams Household and the attorney", "C. Create a Contact-Contact Relationships between the primary member of the Adams Household and the attorney.", "D. Create an Account-Account Relationship between the Addams Family Trust and the attorney."], "a": ["C"]}, {"i": 145, "q": "Lake Tahoe Bank wants their customer reps to be able to see client records such as Person Accounts, but want to restrict access to Financial Accounts to protect the privacy of their clients.\nWhich two steps can an admin take to ensure that all users see Person Accounts, but only specific users can view Financial Accounts?", "o": ["A. Grant users access to the Financial Account object with permission set", "B. Change Organization-wide Defaults (OWD) sharing on the 'Financial Accounts* object to Private'.", "C. Change Organization-wide Defaults (OWD) sharing on the 'Person Accounts\" object to 'Controlled by Parent.", "D. Change Organization-wide Defaults (OWD) sharing on the \"Financial Accounts' object to Public Read /Write'."], "a": ["A", "B"]}, {"i": 146, "q": "Lake Tahoe Bank is evaluating Financial Services Cloud to help them deliver a customer centric view. They currently have a heavily customized Salesforce implementation with a product centric design. Lake Tahoe Bank wants to make sure planned changes have a minimal impact on users during implementation. What is the recommended approach for implementing Financial Services\nCloud at Lake Tahoe Bank?", "o": ["A. Implement Financial Service Cloud in a new org (Green Field) and redesign business capabilities in Ihe new org.", "B. Implement Financial Service Cloud in a Trial org and convert the Trial org to production org.", "C. Implement Financial Service Cloud in the existing org (Brow Field).", "D. Implement Financial Service Cloud in the existing org's Sandbox and then deploy to production org to mitigate the end-user impact"], "a": ["A"]}, {"i": 147, "q": "A financial services company offers special deposit products for its employees. These employees have customer records in Salesforce so that they can be serviced like normal customers.\nOnly customer service employees within a specific group should be able to see these special deposit products in Salesforce to protect the personal financial information of bank employees.\nHow should the administrator configure sharing rules in Financial Services Cloud to meet these requirements?", "o": ["A. Create an Account sharing rule based on record owner.", "B. Create Account sharing rules based on criteria.", "C. Create a Financial Account sharing rule based on record owner.", "D. Create a Financial Account sharing rule based on criteria"], "a": ["D"]}, {"i": 148, "q": "Which of the following objects do support Group-Level Rollups?", "o": ["A. Tasks", "B. Alerts", "C. Financial Accounts", "D. Action Plans", "E. Opportunities"], "a": ["C", "D", "E"]}, {"i": 149, "q": "Lake Tahoe Bank would like to reslricl their Financial Services Cloud users from viewing certain types of milestones that might be irrelevant to their customersor might cause negative sentiment. How can the Salesforce Admin implement such a requirement?", "o": ["A. The Salesforce Admin can manage sensitive Life Evenls using sharing rules.", "B. The Salesforce Admin can hide the life Event or Business Milestone type, by removing it from the Event Type picklist.", "C. The Salesforce Admin can hide sensitive Life Events on Ihe Life Events component on the Lightning Page using the Properties pane.", "D. The Salesforce Admin can manage sensitive Life Events using Permission Sets."], "a": ["C"]}, {"i": 150, "q": "A private equity company with only one administrator wants to upgrade Financial Services Cloud (FSC) from a Sales Cloud Unlimited Edition (UE) org. The company decided to install FSC greenfield on a new org to minimize the transfer of existing tech debt. In preparation for data migration, the administrator has been exporting backup files of the current org for a month.\nWhat should the administrator do as part of the preparation for the data migration process?", "o": ["A. The administrator can ask the business manager on the investment bank team to review the file directly.", "B. After running the backup data export manually for 2 weeks, the administrator can schedule this job to run weekly every Sunday to review the file on Mondays at the start of the week for data comparisons /analysis.", "C. As a dry run, the administrator can test this process via a data export request from the primary sandbox to the existing Sales Cloud UE org.", "D. To start, the administrator can run a daily backup data export for a week, then continue to run this job weekly until they are ready for data migration."], "a": ["D"]}, {"i": 151, "q": "A financial services company needs to alert advisors about changes in client records that require action. What should the administrator consider when configuring Record Alerts?", "o": ["A. When the administrator adds a new Record Alert Category, the severity value in the alert category is the default value on the record alerts advisors create and cannot be changed.", "B. When the admin creates a value for the Severity field, the warning icon is associated with the field automatically, and advisors cannot change the icon.", "C. With permissions for Record Alerts, users can create record alerts on all custom objects and standard objects such as Financial Account.", "D. Record alert categories are not required when creating a record alert, but they help keep alerts organized."], "a": ["C"]}, {"i": 152, "q": "The Salesforce Admin at Lake Tahoe Bank considering implementing Financial Services Cloud. What is the best way for the Admin to access a Financial Services pre-configured org, including data and the right licenses, to learn about the product?", "o": ["A. Request a 30-day Financial Services Cloud trial org", "B. Request a Salesforce developer org.", "C. Purchase one license of Financial Services Cloud and install it in a production org.", "D. Spin up a Salesforce sandbox org."], "a": ["A"]}, {"i": 153, "q": "Salesforce provides a robust set of automation features to help save time and resources. For example, a system administrator can use Flow Builder to automate most of an organization's repetitive business processes.\nWhich use case is a suitable fit for Flow Builder?", "o": ["A. Coordinate multiple flows and assign them to multiple teams or individuals.", "B. Suggest offers and actions to users that are tailored to meet an organization's unique business criteria.", "C. Collect input from internal users with a form placed on a Lightning page launched by a button.", "D. Perform an operation for more records than schedule-triggered flows allow"], "a": ["C"]}, {"i": 154, "q": "A financial services company must add details to the default business hours record. For company-wide holidays, the company wants the option to skip non-work days in Action Plan when setting task completion dates.\nWhat should the administrator configure to meet the requirement?", "o": ["A. Omit the day's start and end time fields when the administrator wants to indicate a non- working day.", "B. Select Recurring Holidays as Action Plans and consider recurring holidays when determining the non- work days to skip.", "C. Configure the day without business hours, it is considered a non-work day, even if the day is a recurring holiday.", "D. Add non-work days to the date offset when calculating the task completion date is automatic; no setup is required."], "a": ["C"]}, {"i": 155, "q": "Which three types of preassembled flows can be utilized from the Financial Services Cloud (FSC) packages and the Lightning Flow for FSC package?", "o": ["A. Institutional Banking flow", "B. Mortgage flow", "C. Insurance flow", "D. Retail Banking flows", "E. Commercial Banking flow"], "a": ["B", "C", "D"]}, {"i": 156, "q": "The Actionable Relationship Center (ARC) is using the Association Type picklist to control the account- account relationships. Which three of the following names are Association Type picklist field values?", "o": ["A. Member", "B. Group", "C. Trust", "D. Family", "E. Peer"], "a": ["C", "D", "E"]}, {"i": 157, "q": "An investment banker is looking to take detailed meeting notes and share them easily with his colleagues while specifying confidentiality and meeting attendees. Which Financial Services Cloud feature should a consultant recommend in this scenario?", "o": ["A. Notes", "B. Events", "C. Engagement Interaction", "D. Interaction Summary"], "a": ["D"]}, {"i": 158, "q": "What steps does the Salesforce Administrator have to take to create a new Business\nMilestone Type?", "o": ["A. In the Object Manager go to the Business Milestone object and create a new field using the name of the new milestone.", "B. Find Person Life Event using the Object Manager and add a new picklist value on the Milestone Type Field.", "C. Find Business Milestone using the Object Manager and add a new picklist value on the Milestone Type Field", "D. In the Lightning Page Editor add the new Milestone Type to the Life Events & Business Milestones Lightning component"], "a": ["C"]}, {"i": 159, "q": "An insurance company wants to create a car insurance quote process for its website. The process should include the following functionality:\n* The user has to enter contact and address information.\n* The user has to enter the driver's age and the car model and year.\n* The process should calculate an insurance quote based on the data the customer provided and save the offer to the client's record.\nWhich three Omni Studio tools should the consultant use to design a solution that meets these requirements?", "o": ["A. Omni Scripts", "B. Integration Procedures", "C. Flex Cards", "D. APEX Code", "E. Business Rules Engine"], "a": ["A", "B", "E"]}, {"i": 160, "q": "Which 3 out of the box capabilities come with Financial Services Cloud Lead & Referral Management?", "o": ["A. Round Robin Referral Routing", "B. Assigning a Referral", "C. Accepting a Referral", "D. Referral Conversion", "E. Referral Automated Approvals"], "a": ["B", "C", "D"]}, {"i": 161, "q": "Lake Tahoe Bank's financial advisors are complaining that they can't see an accurate summary of their clients financial data as clients often change households. How can an Admin set up Financial Services Cloud to provide financial advisorswith an accurate summary of their client's financial data?", "o": ["A. Create a roll-up field on the Opportunity object to track client's Financial Account balance and display the summary amount on the Person Account object.", "B. Set clients financial data to be rolled up using Financial Services Cloud Primary Group.", "C. Create a custom object to track client's financial data", "D. Use Process Builder to create a workflow to summarize data at the Person Account level."], "a": ["B"]}, {"i": 162, "q": "Cumulus Cloud Bank, a major financial services provider, has engaged Salesforce\nProfessional Services to transform its operations with Financial Services Cloud (FSC). The Addams family are wealth management clients with the following relationships:\n* The wife and her husband are part of the Addams Household.\nThe wife is the primary member, and together the couple run the Addams Charitable Trust.\n* The wife is also part of the Symonds Household with her father as the primary member. Which tool should the Salesforce FSC consultant recommend so a wealth manager could make sense of this complex data to provide impeccable service to the Addams family and discover new business opportunities?", "o": ["A. Data Filtering and Sorting in Tableau Desktop", "B. Financial Services Cloud Einstein", "C. Data Visualization with Marketing Cloud Intelligence", "D. Actionable Relationship Center (ARC), an advanced visualization engine"], "a": ["D"]}, {"i": 163, "q": "An administrator is logged into Data Loader with their own credentials to insert new\nBusiness Account records into their Salesforce environment. They forget to specify the Account Owner field in the import file.\nAssuming there are no other issues, what should happen when the administrator uploads the import file?", "o": ["A. The import will succeed, and the Account Owner field will be left blank.", "B. The import will succeed, and the administrator will be prompted to select a user.", "C. The import will fail, since all records in Salesforce must have an owner.", "D. The import will succeed, and the administrator will be named as the default Account Owner."], "a": ["D"]}, {"i": 164, "q": "Cumulus Bank's mortgage department is currently using spreadsheets to gather client data for mortgage applications. The bank is interested in improving the efficiency of this process.\nWhich two features should a consultant suggest to Cumulus Bank to implement?", "o": ["A. The standard mortgage flow templates to build a mortgage flow in Financial Services Cloud", "B. Flow Builder to automate these business processes", "C. A Mortgage Application' custom object to hold the collected client data", "D. Data Import Wizard to upload the data collected in spreadsheets"], "a": ["A", "B"]}, {"i": 165, "q": "A financial services company needs a custom field for reporting when relating two business accounts to each other. Which object should the administrator configure the custom field on?", "o": ["A. Contact-Contact Relationship", "B. Account", "C. Account Account Relationship", "D. Account Contact\\Relationship"], "a": ["C"]}, {"i": 166, "q": "Which three things must an admin keep in mind when creating Action Plan Templates'5", "o": ["A. When creating Action Plan Templates with the Ul. you can designate a plan owner different from the plan creator.", "B. When you create an Action Plan from a template for a specific target record, the plan creator can choose whether the date calculation is based on calendar or working days.", "C. An Action Plan is a run-time instance of the template that allows you to automate the sequence of the tasks you defined in the template.", "D. When youcreate an Action Plan from a template for a specific target record, item deadlines are calculated using the start date and date offset \" defined in the Action Plan Template", "E. The Action Plan Template permission set must be added to all users that want to use Action Plans."], "a": ["B", "C", "D"]}, {"i": 167, "q": "A System Administrator has received a note from one of the portfolio managers that the Actionable Relationship Center (ARC) is not visible when the portfolio manager was trying to set up relationships between two accounts. The portfolio manager has also mentioned that other colleagues in the same role have access to it and are able to use it to manage their customer's relationships. What is a possible cause for this?", "o": ["A. The portfolio manager has not been given the permissions that enable users to view and manage ARC", "B. The portfolio manager does not have access to the Lightning page that has the ARC component added", "C. The portfolio manager does not have access to the account records that he is trying to create for.", "D. The ARC Component has not been added to the page layout"], "a": ["A"]}, {"i": 168, "q": "Which three types of Account-Account relationships are displayed in the Actionable\nRelationship Center?", "o": ["A. Accounts & Businesses", "B. Accounts & Members", "C. Accounts & Peers", "D. Accounts & Groups"], "a": ["A", "C", "D"]}, {"i": 169, "q": "Which three related lists are visible within Actionable Relationship Center associated with the Account object?", "o": ["A. Cases", "B. Notes and Attachments", "C. Client Financial Goals", "D. Financial Holdings", "E. Household Financial Accounts"], "a": ["C", "D", "E"]}, {"i": 170, "q": "Which 3 options does the Financial Services Cloud application offer to view and update Account-Account.\nAccount-Contact, and Contact-Contact Relationships?", "o": ["A. Actionable Relationship Center", "B. Family Members Component", "C. Relationship Map", "D. Group Members Component", "E. Life Events Component"], "a": ["A", "C", "D"]}, {"i": 171, "q": "Lake Tahoe Bank branch manager is asking the Salesforce Administrator for improvements in Salesforce to speed up Loan Approval Processing. The Salesforce Admin is considering using Action Plans. Which 3 process improvements can be delivered using Action Plans?", "o": ["A. Action Plans create repeatable tasks and automate the task sequences when executed", "B. When you create an action plan from a template for a specific targetrecord, items that have no assigned user are assigned to the owner of that \" target record.", "C. Action Plans can automatically schedule the next appointment with the Advisor.", "D. Action Plans enhance collaboration and productivity by automatically assigning task owners and deadlines for specific client processes.", "E. Action Plans can speed up the collection of a list of documents needed for the loan application"], "a": ["A", "B", "D"]}, {"i": 172, "q": "What should a Financial Advisor use to model the relationship between a business contact and a client that is modeled as a person account?", "o": ["A. Account-Account Relationship", "B. Contact-Contact Relationship and the Reciprocal Rote", "C. Reciprocal Role", "D. Account-Contact Relationship and the Reciprocal Role"], "a": ["B"]}];

const KEY = "fsc-ap-study-v2";
const OLD_KEY = "fsc-ap-study-v1";

// 호스트가 window.storage를 주지 않는 환경(일반 웹)에서는 localStorage로 대체한다.
// 없는 키는 throw 해야 아래의 v1 마이그레이션 경로가 그대로 동작한다.
const store = {
  async get(k) {
    if (typeof window !== "undefined" && window.storage) return window.storage.get(k);
    const value = localStorage.getItem(k);
    if (value === null) throw new Error("no value for " + k);
    return { value };
  },
  set(k, v) {
    if (typeof window !== "undefined" && window.storage) return window.storage.set(k, v);
    localStorage.setItem(k, v);
  },
};

const CSS = `
.fsc {
  --bg:#E7EBE5; --paper:#FBFCF9; --ink:#15201A; --soft:#5C6B62;
  --rule:#C6CFC2; --deep:#0E4B37; --gold:#B0821A;
  --right:#1B6B48; --rightbg:#E2EDE5; --wrong:#9E3B2A; --wrongbg:#F2E3DF;
  --sans:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','Pretendard','Apple SD Gothic Neo','Malgun Gothic',sans-serif;
  --serif:'Iowan Old Style','Palatino Linotype',Palatino,'Source Serif 4',Georgia,serif;
  background:var(--bg); color:var(--ink); font-family:var(--sans);
  min-height:100vh; font-size:15px; line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
.fsc *{box-sizing:border-box;}
.col{max-width:760px;margin:0 auto;padding:36px 22px 96px;}
.col.narrow{max-width:700px;}

.eyebrow{font-size:12.5px;color:var(--soft);letter-spacing:.01em;}
h1.title{font-family:var(--serif);font-size:34px;line-height:1.15;font-weight:600;margin:6px 0 8px;letter-spacing:-.01em;}
.sub{color:var(--soft);font-size:13.5px;margin-bottom:26px;}
h2.sec{font-family:var(--serif);font-size:20px;font-weight:600;margin:42px 0 2px;}
.secsub{color:var(--soft);font-size:13px;margin-bottom:14px;}

/* board */
.board{display:grid;grid-template-columns:repeat(auto-fill,minmax(30px,1fr));gap:4px;margin:0 0 14px;}
.cell{position:relative;aspect-ratio:1;border:1px solid var(--rule);background:var(--paper);
  border-radius:3px;font-size:10.5px;color:var(--soft);cursor:pointer;padding:0;
  display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;
  transition:transform .08s ease;}
.cell:hover{border-color:var(--deep);color:var(--ink);}
.cell:active{transform:scale(.92);}
.cell.o{background:var(--rightbg);border-color:#A9C6B4;color:var(--right);}
.cell.x1{background:#F2E3DF;border-color:#D6ADA3;color:var(--wrong);}
.cell.x2{background:#E3BFB6;border-color:#C08D80;color:#7C2A1D;}
.cell.x3{background:#C98F80;border-color:#A9705F;color:#fff;}
.cell.fill{background:#D8DFD6;border-color:#A9B4A5;color:var(--ink);}
.cell.now{outline:2px solid var(--deep);outline-offset:1px;}
.cell.st::after{content:"";position:absolute;top:2px;right:2px;width:4px;height:4px;
  border-radius:50%;background:var(--gold);}
.legend{display:flex;flex-wrap:wrap;gap:16px;align-items:center;font-size:12.5px;color:var(--soft);
  padding-bottom:22px;border-bottom:1px solid var(--rule);}
.legend b{color:var(--ink);font-weight:600;font-variant-numeric:tabular-nums;}
.linkish{background:none;border:none;padding:0;font:inherit;font-size:12.5px;color:var(--soft);
  text-decoration:underline;text-underline-offset:3px;cursor:pointer;}
.linkish:hover{color:var(--wrong);}
.linkish:disabled{opacity:.4;cursor:default;text-decoration:none;}
.resets{display:flex;flex-wrap:wrap;gap:18px;padding:16px 0 0;}

/* mode rows */
.mode{width:100%;text-align:left;background:none;border:none;border-bottom:1px solid var(--rule);
  padding:20px 2px;display:flex;align-items:baseline;gap:16px;cursor:pointer;font:inherit;color:inherit;}
.mode:hover .mname{color:var(--deep);}
.mode:disabled{opacity:.45;cursor:default;}
.mname{font-family:var(--serif);font-size:19px;font-weight:600;flex:0 0 auto;min-width:158px;}
.mdesc{color:var(--soft);font-size:13px;flex:1;}
.mmeta{color:var(--soft);font-size:12.5px;font-variant-numeric:tabular-nums;}
.counts{display:flex;gap:8px;padding:14px 0 0;flex-wrap:wrap;}
.chip{border:1px solid var(--rule);background:var(--paper);border-radius:99px;padding:5px 13px;
  cursor:pointer;color:var(--soft);font:inherit;font-size:12.5px;}
.chip.on{border-color:var(--deep);background:var(--deep);color:#fff;}

/* exam history */
.hist{width:100%;text-align:left;background:none;border:none;border-top:1px solid var(--rule);
  padding:14px 2px;display:flex;align-items:baseline;gap:14px;cursor:pointer;font:inherit;color:inherit;}
.hist:hover{background:var(--paper);}
.hist .hd{color:var(--soft);font-size:12.5px;flex:0 0 116px;font-variant-numeric:tabular-nums;}
.hist .hs{font-family:var(--serif);font-size:16px;font-weight:600;flex:0 0 82px;font-variant-numeric:tabular-nums;}
.hist .hp{flex:1;color:var(--soft);font-size:13px;font-variant-numeric:tabular-nums;}
.hist .hgo{color:var(--soft);font-size:12.5px;}
.histfoot{border-top:1px solid var(--rule);padding-top:14px;font-size:12.5px;color:var(--soft);}

/* topbar */
.top{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--rule);}
.topin{max-width:760px;margin:0 auto;padding:12px 22px;display:flex;align-items:center;gap:14px;}
.pos{font-size:13px;color:var(--soft);font-variant-numeric:tabular-nums;}
.bar{flex:1;height:2px;background:var(--rule);position:relative;overflow:hidden;}
.bar i{position:absolute;left:0;top:0;bottom:0;background:var(--deep);transition:width .25s ease;}
.iconbtn{background:none;border:none;cursor:pointer;font:inherit;font-size:13px;color:var(--soft);padding:4px 6px;}
.iconbtn:hover{color:var(--ink);}
.star{font-size:17px;line-height:1;color:var(--rule);}
.star.on{color:var(--gold);}

/* question */
.qno{font-size:12.5px;color:var(--soft);font-variant-numeric:tabular-nums;margin-bottom:10px;}
.qno .tally{color:var(--wrong);}
.qtext{font-family:var(--serif);font-size:19px;line-height:1.5;white-space:pre-wrap;margin-bottom:6px;}
.hint{font-size:12.5px;color:var(--soft);margin-bottom:20px;}
.opts{display:flex;flex-direction:column;gap:8px;}
.opt{display:flex;gap:0;align-items:stretch;text-align:left;width:100%;background:var(--paper);
  border:1px solid var(--rule);border-radius:4px;cursor:pointer;font:inherit;color:inherit;padding:0;
  transition:border-color .12s ease,background .12s ease;}
.opt:hover{border-color:#9AA79D;}
.opt .ltr{flex:0 0 40px;display:flex;align-items:center;justify-content:center;
  border-right:1px solid var(--rule);color:var(--soft);font-size:13px;font-weight:600;}
.opt .txt{padding:12px 14px;flex:1;font-size:14.5px;line-height:1.5;}
.opt .mk{flex:0 0 34px;display:flex;align-items:center;justify-content:center;font-size:14px;}
.opt.sel{border-color:var(--deep);background:#EAF0EB;}
.opt.sel .ltr{border-color:#A9C6B4;color:var(--deep);}
.opt.ok{border-color:var(--right);background:var(--rightbg);}
.opt.ok .ltr,.opt.ok .mk{color:var(--right);border-color:#A9C6B4;}
.opt.no{border-color:var(--wrong);background:var(--wrongbg);}
.opt.no .ltr,.opt.no .mk{color:var(--wrong);border-color:#D6ADA3;}
.opt:disabled{cursor:default;}

/* verdict + actions */
.verdict{margin-top:20px;padding:13px 15px;border-radius:4px;font-size:14px;display:flex;
  justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;}
.verdict.ok{background:var(--rightbg);color:var(--right);}
.verdict.no{background:var(--wrongbg);color:var(--wrong);}
.verdict b{font-weight:600;letter-spacing:.06em;}
.actions{display:flex;gap:10px;margin-top:22px;align-items:center;flex-wrap:wrap;}
.btn{border:1px solid var(--deep);background:var(--deep);color:#fff;border-radius:4px;
  padding:11px 22px;font:inherit;font-size:14px;cursor:pointer;}
.btn:hover{background:#0B3B2C;}
.btn:disabled{opacity:.35;cursor:default;}
.btn.ghost{background:none;color:var(--ink);border-color:var(--rule);}
.btn.ghost:hover{background:var(--paper);border-color:#9AA79D;}
.btn.danger{background:var(--wrong);border-color:var(--wrong);}
.btn.danger:hover{background:#832F21;}
.keys{font-size:12px;color:var(--soft);margin-top:20px;}
kbd{font-family:var(--sans);font-size:11px;border:1px solid var(--rule);background:var(--paper);
  border-radius:3px;padding:1px 5px;margin:0 1px;}

/* result */
.score{font-family:var(--serif);font-size:52px;font-weight:600;line-height:1;font-variant-numeric:tabular-nums;}
.scoresub{color:var(--soft);font-size:13.5px;margin-top:10px;}
.rev{border-top:1px solid var(--rule);padding:20px 0;}
.rev .rq{font-family:var(--serif);font-size:15.5px;line-height:1.5;white-space:pre-wrap;margin:6px 0 12px;}
.pill{display:inline-block;font-size:12px;padding:2px 9px;border-radius:99px;margin-right:6px;}
.pill.ok{background:var(--rightbg);color:var(--right);}
.pill.no{background:var(--wrongbg);color:var(--wrong);}
.ansline{font-size:13px;color:var(--soft);margin-top:4px;}
.ansline em{font-style:normal;color:var(--ink);font-weight:600;}
.revhead{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:34px 0 0;}
.empty{color:var(--soft);font-size:14px;padding:40px 0;}

/* dialog */
.ovl{position:fixed;inset:0;background:rgba(21,32,26,.42);z-index:60;
  display:flex;align-items:center;justify-content:center;padding:22px;}
.dlg{background:var(--paper);border:1px solid var(--rule);border-radius:6px;
  padding:24px 24px 20px;max-width:410px;width:100%;box-shadow:0 18px 40px rgba(21,32,26,.18);}
.dlg p{margin:0 0 22px;font-size:14.5px;line-height:1.6;}
.dlg .row{display:flex;gap:10px;justify-content:flex-end;}

@media (max-width:600px){
  .col{padding:26px 16px 80px;}
  .topin{padding:10px 16px;}
  h1.title{font-size:27px;}
  .mode{flex-direction:column;gap:4px;padding:16px 2px;}
  .mname{min-width:0;font-size:17px;}
  .qtext{font-size:17px;}
  .board{grid-template-columns:repeat(auto-fill,minmax(26px,1fr));}
  .score{font-size:42px;}
  .hist{flex-wrap:wrap;gap:6px 14px;}
  .hist .hd{flex:0 0 100%;}
  .hist .hgo{display:none;}
}
@media (prefers-reduced-motion:reduce){ .fsc *{transition:none!important;} }
.fsc button:focus-visible{outline:2px solid var(--deep);outline-offset:2px;}
`;

const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const eqSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
const byId = {}; QUESTIONS.forEach((q) => { byId[q.i] = q; });
const fmtTime = (s) => `${Math.floor(s / 60)}분 ${String(s % 60).padStart(2, "0")}초`;
const fmtDate = (ms) => {
  const d = new Date(ms);
  return `${d.getMonth() + 1}월 ${d.getDate()}일 ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};
const cellClass = (c) => {
  if (!c) return "";
  if (c.x >= 3) return " x3";
  if (c.x === 2) return " x2";
  if (c.x === 1) return " x1";
  if (c.o) return " o";
  return "";
};

function Question({ q, sel, onToggle, locked, tally }) {
  const n = q.a.length;
  return (
    <>
      <div className="qno">
        문항 {q.i}
        {tally > 0 && <span className="tally"> · 지금까지 {tally}번 틀림</span>}
      </div>
      <div className="qtext">{q.q}</div>
      <div className="hint">{n > 1 ? `${n}개 선택` : "1개 선택"}</div>
      <div className="opts">
        {q.o.map((raw) => {
          const L = raw.slice(0, 1);
          const text = raw.slice(3);
          const picked = sel.includes(L);
          const correct = q.a.includes(L);
          let cls = "opt";
          if (locked) {
            if (correct) cls += " ok";
            else if (picked) cls += " no";
          } else if (picked) cls += " sel";
          return (
            <button key={L} className={cls} disabled={locked} onClick={() => onToggle(L)}>
              <span className="ltr">{L}</span>
              <span className="txt">{text}</span>
              <span className="mk">{locked ? (correct ? "✓" : picked ? "✕" : "") : ""}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [stars, setStars] = useState([]);
  const [counts, setCounts] = useState({});   // 한 문제씩 풀기 전용: id -> {o, x}
  const [exams, setExams] = useState([]);     // 모의고사 기록 전용
  const [ready, setReady] = useState(false);

  // practice
  const [pool, setPool] = useState([]);
  const [idx, setIdx] = useState(0);
  const [work, setWork] = useState({});

  // exam
  const [examIds, setExamIds] = useState([]);
  const [examAns, setExamAns] = useState({});
  const [eIdx, setEIdx] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [wrongOnly, setWrongOnly] = useState(true);
  const [examSize, setExamSize] = useState(QUESTIONS.length);
  const [showNav, setShowNav] = useState(false);
  const [dialog, setDialog] = useState(null);

  /* ---------- storage ---------- */
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await store.get(KEY);
        const d = JSON.parse(r.value);
        if (alive && d) { setStars(d.stars || []); setCounts(d.counts || {}); setExams(d.exams || []); }
      } catch (e) {
        try { // v1에서 옮겨오기
          const r = await store.get(OLD_KEY);
          const d = JSON.parse(r.value);
          if (alive && d) {
            const c = {};
            Object.entries(d.results || {}).forEach(([k, v]) => { c[k] = { o: v === "o" ? 1 : 0, x: v === "x" ? 1 : 0 }; });
            setStars(d.stars || []); setCounts(c);
          }
        } catch (e2) { /* 첫 실행 */ }
      }
      if (alive) setReady(true);
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { store.set(KEY, JSON.stringify({ stars, counts, exams })); } catch (e) {}
  }, [ready, stars, counts, exams]);

  const toggleStar = useCallback((id) => {
    setStars((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }, []);

  const bump = useCallback((id, ok) => {
    setCounts((p) => {
      const c = p[id] || { o: 0, x: 0 };
      return { ...p, [id]: ok ? { ...c, o: c.o + 1 } : { ...c, x: c.x + 1 } };
    });
  }, []);

  /* ---------- session start ---------- */
  const startPractice = (ids, at = 0) => { setPool(ids); setIdx(at); setWork({}); setView("practice"); };
  const startExam = (n) => {
    setExamIds(shuffle(QUESTIONS.map((q) => q.i)).slice(0, n));
    setExamAns({}); setEIdx(0); setShowNav(false);
    setStartedAt(Date.now()); setElapsed(0); setView("exam");
  };

  useEffect(() => {
    if (view !== "exam") return;
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 1000);
    return () => clearInterval(t);
  }, [view, startedAt]);

  /* ---------- derived ---------- */
  const stat = useMemo(() => {
    let attempted = 0, wrongQ = 0, wrongTotal = 0, clean = 0;
    Object.values(counts).forEach((c) => {
      if (c.o + c.x > 0) attempted++;
      if (c.x > 0) { wrongQ++; wrongTotal += c.x; } else if (c.o > 0) clean++;
    });
    return { attempted, wrongQ, wrongTotal, clean };
  }, [counts]);

  const wrongRanked = useMemo(
    () => Object.keys(counts).map(Number).filter((id) => counts[id].x > 0)
      .sort((a, b) => counts[b].x - counts[a].x || a - b),
    [counts]
  );

  /* ---------- practice ---------- */
  const curId = pool[idx];
  const curQ = byId[curId];
  const cur = work[curId] || { sel: [], locked: false };

  const pToggle = (L) => {
    if (cur.locked) return;
    const sel = curQ.a.length === 1
      ? (cur.sel.includes(L) ? [] : [L])
      : (cur.sel.includes(L) ? cur.sel.filter((x) => x !== L) : [...cur.sel, L]);
    setWork((w) => ({ ...w, [curId]: { sel, locked: false } }));
  };
  const pCheck = () => {
    if (!cur.sel.length || cur.locked) return;
    setWork((w) => ({ ...w, [curId]: { sel: cur.sel, locked: true } }));
    bump(curId, eqSet(cur.sel, curQ.a));
  };
  const pMove = (d) => { const n = idx + d; if (n >= 0 && n < pool.length) setIdx(n); };

  /* ---------- exam ---------- */
  const exId = examIds[eIdx];
  const exQ = byId[exId];
  const exSel = examAns[exId] || [];
  const eToggle = (L) => {
    const sel = exQ.a.length === 1
      ? (exSel.includes(L) ? [] : [L])
      : (exSel.includes(L) ? exSel.filter((x) => x !== L) : [...exSel, L]);
    setExamAns((a) => ({ ...a, [exId]: sel }));
  };
  const gradeExam = () => {
    const secs = Math.floor((Date.now() - startedAt) / 1000);
    const score = examIds.filter((id) => eqSet(examAns[id] || [], byId[id].a)).length;
    setExams((p) => [{ at: Date.now(), ids: examIds, ans: examAns, secs, score }, ...p].slice(0, 30));
    setElapsed(secs); setWrongOnly(true); setView("result");
  };
  const submitExam = () => {
    const blank = examIds.filter((id) => !(examAns[id] || []).length).length;
    if (!blank) { gradeExam(); return; }
    setDialog({
      msg: `아직 안 푼 문제가 ${blank}개 있습니다. 지금 제출하면 그 문제는 오답 처리됩니다.`,
      yes: "제출하기", onYes: gradeExam,
    });
  };
  const openRecord = (r) => {
    setExamIds(r.ids); setExamAns(r.ans); setElapsed(r.secs); setWrongOnly(true); setView("result");
  };
  const examScore = useMemo(
    () => examIds.filter((id) => eqSet(examAns[id] || [], byId[id].a)).length,
    [examIds, examAns]
  );

  /* ---------- keyboard ---------- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (dialog) {
        if (k === "Escape") { e.preventDefault(); setDialog(null); }
        if (k === "Enter") { e.preventDefault(); const d = dialog; setDialog(null); d.onYes(); }
        return;
      }
      const q = view === "practice" ? curQ : view === "exam" ? exQ : null;
      if (!q) return;
      const letters = q.o.map((o) => o.slice(0, 1));
      const li = /^[a-fA-F]$/.test(k) ? letters.indexOf(k.toUpperCase())
        : /^[1-6]$/.test(k) ? Number(k) - 1 : -1;
      if (li >= 0 && letters[li]) {
        e.preventDefault();
        (view === "practice" ? pToggle : eToggle)(letters[li]);
        return;
      }
      if (k === "s" || k === "S") { e.preventDefault(); toggleStar(view === "practice" ? curId : exId); return; }
      if (view === "practice") {
        if (k === "Enter") { e.preventDefault(); cur.locked ? pMove(1) : pCheck(); }
        if (k === "ArrowRight") { e.preventDefault(); pMove(1); }
        if (k === "ArrowLeft") { e.preventDefault(); pMove(-1); }
      } else {
        if (k === "Enter" || k === "ArrowRight") { e.preventDefault(); setEIdx((i) => Math.min(i + 1, examIds.length - 1)); }
        if (k === "ArrowLeft") { e.preventDefault(); setEIdx((i) => Math.max(i - 1, 0)); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  /* ---------- small components ---------- */
  const StarBtn = ({ id }) => (
    <button className="iconbtn" onClick={() => toggleStar(id)}
      aria-label={stars.includes(id) ? "별표 해제" : "별표 표시"}>
      <span className={"star" + (stars.includes(id) ? " on" : "")}>{stars.includes(id) ? "★" : "☆"}</span>
    </button>
  );

  const Board = ({ ids, onPick, state, label, now }) => (
    <div className="board">
      {ids.map((id, i) => {
        const cls = state ? state(id, i) : cellClass(counts[id]);
        return (
          <button key={id} className={"cell" + cls + (stars.includes(id) ? " st" : "") + (now === i ? " now" : "")}
            onClick={() => onPick(id, i)}
            title={counts[id] ? `문항 ${id} · 맞힘 ${counts[id].o} / 틀림 ${counts[id].x}` : `문항 ${id}`}>
            {label ? label(id, i) : id}
          </button>
        );
      })}
    </div>
  );

  /* ---------- views ---------- */
  if (!ready) return <div className="fsc"><style>{CSS}</style><div className="col" /></div>;

  let body;

  if (view === "home") {
    body = (
      <div className="col">
        <div className="eyebrow">Salesforce · Financial Services Cloud</div>
        <h1 className="title">FSC Accredited Professional 문제은행</h1>
        <div className="sub">{QUESTIONS.length}문항 · 번호를 누르면 그 문제부터 바로 풀 수 있습니다.</div>

        <Board ids={QUESTIONS.map((q) => q.i)}
          onPick={(id) => startPractice(QUESTIONS.map((q) => q.i), QUESTIONS.findIndex((q) => q.i === id))} />

        <div className="legend">
          <span>푼 문제 <b>{stat.attempted}</b></span>
          <span>한 번도 안 틀린 문제 <b>{stat.clean}</b></span>
          <span>틀린 적 있는 문제 <b>{stat.wrongQ}</b></span>
          <span>총 오답 <b>{stat.wrongTotal}</b>회</span>
          <span>별표 <b>{stars.length}</b></span>
        </div>
        <div className="sub" style={{ marginTop: 10, marginBottom: 0, fontSize: 12.5 }}>
          위 숫자와 색은 한 문제씩 풀기 기록입니다. 색이 진할수록 많이 틀린 문제예요. 모의고사는 여기에 반영되지 않습니다.
        </div>

        <div className="resets">
          <button className="linkish" disabled={!stat.attempted} onClick={() => setDialog({
            msg: "한 문제씩 풀기의 맞힘·오답 횟수를 모두 0으로 되돌립니다. 별표와 모의고사 기록은 그대로 둡니다.",
            yes: "횟수 초기화", danger: true, onYes: () => setCounts({}),
          })}>오답 횟수 초기화</button>
          <button className="linkish" disabled={!exams.length} onClick={() => setDialog({
            msg: `모의고사 기록 ${exams.length}회를 모두 지웁니다.`,
            yes: "기록 삭제", danger: true, onYes: () => setExams([]),
          })}>모의고사 기록 삭제</button>
          <button className="linkish" disabled={!stars.length} onClick={() => setDialog({
            msg: `별표 ${stars.length}개를 모두 해제합니다.`,
            yes: "전체 해제", danger: true, onYes: () => setStars([]),
          })}>별표 전체 해제</button>
        </div>

        <h2 className="sec">한 문제씩 풀기</h2>
        <div className="secsub">답을 고르면 바로 채점하고, 문항마다 틀린 횟수를 쌓아 둡니다.</div>
        <button className="mode" onClick={() => startPractice(QUESTIONS.map((q) => q.i), 0)}>
          <span className="mname">처음부터</span>
          <span className="mdesc">1번부터 순서대로 풉니다.</span>
          <span className="mmeta">{QUESTIONS.length}문항</span>
        </button>
        <button className="mode" disabled={!wrongRanked.length}
          onClick={() => startPractice(wrongRanked, 0)}>
          <span className="mname">많이 틀린 순</span>
          <span className="mdesc">
            {wrongRanked.length
              ? `가장 많이 틀린 문항(${wrongRanked[0]}번, ${counts[wrongRanked[0]].x}회)부터 순서대로 풉니다.`
              : "틀린 문제가 쌓이면 여기에 모입니다."}
          </span>
          <span className="mmeta">{wrongRanked.length}문항</span>
        </button>
        <button className="mode" disabled={!stars.length} onClick={() => startPractice(shuffle(stars), 0)}>
          <span className="mname">별표 문제만</span>
          <span className="mdesc">
            {stars.length ? "표시해 둔 문제를 랜덤 순서로 다시 풉니다." : "문제를 풀면서 ☆를 누르면 여기에 모입니다."}
          </span>
          <span className="mmeta">{stars.length}문항</span>
        </button>

        <h2 className="sec">모의고사</h2>
        <div className="secsub">랜덤 순서로 몰아 풀고, 제출한 뒤에 한 번에 채점합니다. 회차별로 기록이 남습니다.</div>
        <button className="mode" onClick={() => startExam(examSize)}>
          <span className="mname">새 시험 시작</span>
          <span className="mdesc">시간을 재고, 제출 전까지 답을 자유롭게 바꿀 수 있습니다.</span>
          <span className="mmeta">{examSize}문항</span>
        </button>
        <div className="counts">
          {[20, 50, 100, QUESTIONS.length].map((n) => (
            <button key={n} className={"chip" + (examSize === n ? " on" : "")}
              onClick={() => setExamSize(n)}>{n === QUESTIONS.length ? "전체" : n + "문항"}</button>
          ))}
        </div>

        {exams.length > 0 && (
          <div style={{ marginTop: 30 }}>
            {exams.map((r) => (
              <button className="hist" key={r.at} onClick={() => openRecord(r)}>
                <span className="hd">{fmtDate(r.at)}</span>
                <span className="hs">{r.score} / {r.ids.length}</span>
                <span className="hp">정답률 {Math.round((r.score / r.ids.length) * 100)}% · {fmtTime(r.secs)}</span>
                <span className="hgo">다시 보기</span>
              </button>
            ))}
            <div className="histfoot">
              평균 정답률 {Math.round(exams.reduce((s, r) => s + r.score / r.ids.length, 0) / exams.length * 100)}%
              · 최근 {exams.length}회 (최대 30회까지 보관)
            </div>
          </div>
        )}
      </div>
    );
  }

  if (view === "practice") {
    const solved = pool.filter((id) => work[id] && work[id].locked).length;
    const ok = curQ && cur.locked && eqSet(cur.sel, curQ.a);
    const c = counts[curId] || { o: 0, x: 0 };
    body = (
      <>
        <div className="top"><div className="topin">
          <button className="iconbtn" onClick={() => setView("home")}>← 목록</button>
          <span className="pos">{idx + 1} / {pool.length}</span>
          <span className="bar"><i style={{ width: `${(solved / pool.length) * 100}%` }} /></span>
          <StarBtn id={curId} />
        </div></div>
        <div className="col narrow">
          {!curQ ? <div className="empty">문제가 없습니다.</div> : (
            <>
              <Question q={curQ} sel={cur.sel} onToggle={pToggle} locked={cur.locked}
                tally={cur.locked ? 0 : c.x} />
              {cur.locked && (
                <div className={"verdict " + (ok ? "ok" : "no")}>
                  <span>{ok ? "정답입니다" : "오답입니다"}{c.x > 0 && ` · 이 문제 누적 ${c.x}번 틀림`}</span>
                  <span>정답 <b>{curQ.a.join(" ")}</b></span>
                </div>
              )}
              <div className="actions">
                {!cur.locked
                  ? <button className="btn" onClick={pCheck} disabled={!cur.sel.length}>정답 확인</button>
                  : idx < pool.length - 1
                    ? <button className="btn" onClick={() => pMove(1)}>다음 문제</button>
                    : <button className="btn" onClick={() => setView("home")}>다 풀었습니다</button>}
                <button className="btn ghost" onClick={() => pMove(-1)} disabled={idx === 0}>이전</button>
                {cur.locked && idx < pool.length - 1 && (
                  <button className="btn ghost" onClick={() => pMove(1)}>건너뛰기</button>
                )}
              </div>
              <div className="keys">
                <kbd>A</kbd>–<kbd>F</kbd> 선택 · <kbd>Enter</kbd> 확인·다음 · <kbd>←</kbd><kbd>→</kbd> 이동 · <kbd>S</kbd> 별표
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  if (view === "exam") {
    const answered = examIds.filter((id) => (examAns[id] || []).length).length;
    body = (
      <>
        <div className="top"><div className="topin">
          <button className="iconbtn" onClick={() => setDialog({
            msg: "시험을 그만두면 지금까지 고른 답안은 저장되지 않습니다.",
            yes: "그만두기", danger: true, onYes: () => setView("home"),
          })}>← 나가기</button>
          <span className="pos">{eIdx + 1} / {examIds.length}</span>
          <span className="bar"><i style={{ width: `${(answered / examIds.length) * 100}%` }} /></span>
          <span className="pos">{fmtTime(elapsed)}</span>
          <StarBtn id={exId} />
        </div></div>
        <div className="col narrow">
          <Question q={exQ} sel={exSel} onToggle={eToggle} locked={false} tally={0} />
          <div className="actions">
            <button className="btn ghost" onClick={() => setEIdx((i) => Math.max(0, i - 1))} disabled={eIdx === 0}>이전</button>
            {eIdx < examIds.length - 1
              ? <button className="btn" onClick={() => setEIdx((i) => i + 1)}>다음</button>
              : <button className="btn" onClick={submitExam}>제출하고 채점</button>}
            <button className="btn ghost" onClick={() => setShowNav((v) => !v)}>{showNav ? "번호판 닫기" : "번호판"}</button>
            {eIdx < examIds.length - 1 && (
              <button className="linkish" style={{ marginLeft: "auto" }} onClick={submitExam}>지금 제출</button>
            )}
          </div>
          {showNav && (
            <div style={{ marginTop: 22 }}>
              <Board ids={examIds} now={eIdx} label={(id, i) => i + 1}
                state={(id) => ((examAns[id] || []).length ? " fill" : "")}
                onPick={(id, i) => { setEIdx(i); setShowNav(false); }} />
              <div className="legend" style={{ borderBottom: "none", paddingBottom: 0 }}>
                <span>푼 문제 <b>{answered}</b> · 남은 문제 <b>{examIds.length - answered}</b></span>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  if (view === "result") {
    const pct = Math.round((examScore / examIds.length) * 100);
    const wrongIds = examIds.filter((id) => !eqSet(examAns[id] || [], byId[id].a));
    const list = wrongOnly ? wrongIds : examIds;
    body = (
      <div className="col">
        <div className="eyebrow">모의고사 결과</div>
        <div className="score">{examScore} / {examIds.length}</div>
        <div className="scoresub">정답률 {pct}% · 걸린 시간 {fmtTime(elapsed)} · 이 회차는 기록에 저장됩니다</div>
        <div className="actions" style={{ marginTop: 26 }}>
          <button className="btn ghost" onClick={() => setView("home")}>목록으로</button>
          {wrongIds.length > 0 && (
            <button className="btn" onClick={() => startPractice(wrongIds, 0)}>틀린 {wrongIds.length}문제 한 문제씩 풀기</button>
          )}
          {wrongIds.length > 0 && (
            <button className="linkish" onClick={() => setStars((p) => [...new Set([...p, ...wrongIds])])}>
              틀린 문제 전부 별표
            </button>
          )}
        </div>

        <div className="revhead">
          <strong style={{ fontSize: 15 }}>문제 다시 보기</strong>
          <span>
            <button className={"chip" + (wrongOnly ? " on" : "")} onClick={() => setWrongOnly(true)}>틀린 것만 {wrongIds.length}</button>{" "}
            <button className={"chip" + (!wrongOnly ? " on" : "")} onClick={() => setWrongOnly(false)}>전체 {examIds.length}</button>
          </span>
        </div>

        {list.length === 0 && <div className="empty">틀린 문제가 없습니다. 전부 맞혔습니다.</div>}
        {list.map((id) => {
          const q = byId[id];
          const mine = examAns[id] || [];
          const ok = eqSet(mine, q.a);
          return (
            <div className="rev" key={id}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>
                  <span className={"pill " + (ok ? "ok" : "no")}>{ok ? "정답" : "오답"}</span>
                  <span className="qno" style={{ margin: 0, display: "inline" }}>문항 {id}</span>
                </span>
                <StarBtn id={id} />
              </div>
              <div className="rq">{q.q}</div>
              {q.o.map((raw) => {
                const L = raw.slice(0, 1);
                const isA = q.a.includes(L), isM = mine.includes(L);
                if (!isA && !isM) return null;
                return (
                  <div key={L} className="ansline">
                    <em style={{ color: isA ? "var(--right)" : "var(--wrong)" }}>{isA ? "✓" : "✕"} {L}.</em> {raw.slice(3)}
                  </div>
                );
              })}
              <div className="ansline" style={{ marginTop: 8 }}>
                내 답 <em>{mine.length ? mine.join(" ") : "없음"}</em> · 정답 <em>{q.a.join(" ")}</em>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="fsc">
      <style>{CSS}</style>
      {body}
      {dialog && (
        <div className="ovl" onClick={(e) => { if (e.target === e.currentTarget) setDialog(null); }}>
          <div className="dlg" role="dialog" aria-modal="true">
            <p>{dialog.msg}</p>
            <div className="row">
              <button className="btn ghost" onClick={() => setDialog(null)}>취소</button>
              <button className={"btn" + (dialog.danger ? " danger" : "")} autoFocus
                onClick={() => { const d = dialog; setDialog(null); d.onYes(); }}>{dialog.yes}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
