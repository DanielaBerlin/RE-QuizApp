//CREATE A QUIZ CLASS
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
      if (this.isEnded()) {
        showScores();
      } else {
        displayQuestion();
      }
    } else {
      let answerElement = document.getElementById('right-answer');
      answerElement.innerHTML = this.getQuestionIndex().answer;
      let nextButton = document.getElementById('btn-next');
      nextButton.style.display = 'block';
    }
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

//QUESTION CLASS
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    this.showCorrectAnswer(choice);
    return this.answer === choice;
  }

  showCorrectAnswer(choice) {
    let answerElement = document.getElementById('right-answer');
    answerElement.innerHTML = this.answer;
  }
}

//DISPLAY QUESTION

function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    let questionElement = document.getElementById('question');
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    //show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById('choice' + i);
      choiceElement.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }

    showProgress();
  }
}

//GUESS FUNCTION

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

// Next Question

function nextQuestion() {
  quiz.questionIndex++;
  displayQuestion();
}

//SHOW quiz progress

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById('progress');
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//SHOW SCORE
function showScores() {
  let quizEndHTML = `
        <h1>Quiz Completed</h1> 
        <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length} </h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
    `;
  let quizElement = document.getElementById('quiz');
  quizElement.innerHTML = quizEndHTML;
}

//CREATE QUIZ QUESTIONS
let questions = [
  new Question(
    'In requirements engineering, what is the definition of requirements?',
    [
      'a property or capability that a system or sub-system must possess in order to satisfy the documented and undocumented demands of the stakeholders',
      'a property or capability that a system or subsystem must possess in order to satisfy a contract, standard, specification, or other formally specified documents',
      'a property or capability that a system or subsystem must possess in order to be accepted after being proved and tested',
      'a property or capability of a system or subsystem described by stakeholders, documented by the requirements engineer, and realized by software developers',
    ],
    'a property or capability that a system or subsystem must possess in order to satisfy a contract, standard, specification, or other formally specified documents'
  ),
  new Question(
    'Which of the following activities are performed by a requirements engineer?',
    [
      'select and manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and control the detailing of requirements',
      'select and manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and prepare to be the future Product Owner',
      'select and manage stakeholders, check realization costs of all requirements, ensure the traceability of the requirements, and control the detailing of requirements',
      'manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and control the backlog of the software developers',
    ],
    'select and manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and control the detailing of requirements'
  ),
  new Question(
    'What does the acronym FAIS stand for?',
    [
      'feature aware information systemsselect and manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and control the detailing of requirements',
      'select and manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and prepare to be the future Product Owner',
      'select and manage stakeholders, check realization costs of all requirements, ensure the traceability of the requirements, and control the detailing of requirements',
      'manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and control the backlog of the software developers',
    ],
    'select and manage stakeholders, check whether all boundary conditions are met, ensure the traceability of the requirements, and control the detailing of requirements'
  ),
  new Question(
    'What are the legally binding modal verbs used in requirements engineering to describe priority?',
    [
      'shall not, should, will, and must',
      'shall, should not, will, and must',
      'shall, should, will, and must',
      'shall, should, will, and must not',
    ],
    'shall, should, will, and must not'
  ),
  new Question(
    'Requirements can be divided into three levels based on maturity. What are the definitions of each level?',
    [
      'At level one, requirements are incomplete; at level two, requirements are reliable, resilient, and may be incomplete; and at level three, requirements meet most of the quality criteria, and are complete and correct.',
      'At level one, requirements are incomplete and examples are sufficient; at level two, requirements are reliable, resilient, and may be incomplete; and at level three, requirements meet all quality criteria, and are complete and correct.',
      'At level one, requirements are incomplete but extended by user stories; at level two, requirements are reliable, resilient, and may be incomplete; and at level three, requirements meet all quality criteria, and are complete and correct.',
      'At level one, requirements are incomplete and examples are sufficient; at level two, requirements may not be resilient; and at level three, requirements meet all quality criteria, and are complete and correct.',
    ],
    'At level one, requirements are incomplete and examples are sufficient; at level two, requirements are reliable, resilient, and may be incomplete; and at level three, requirements meet all quality criteria, and are complete and correct.'
  ),
  new Question(
    'What are the duties of a stakeholder?',
    [
      'A stakeholder delivers the requirements of their special field, and supports the requirements engineer by answering their questions or reviewing their documents.',
      'A stakeholder instructs the requirements engineer on how to formulate requirements of their special field, and supports them by answering questions or reviewing documents.',
      'A stakeholder makes the requirements engineer prioritize their requirements, itemize the requirements on demand, and review the documents.',
      'A stakeholder defends the stakes against changes launched by the requirements engineer, and supports them by answering questions or reviewing documents.',
    ],
    'A stakeholder delivers the requirements of their special field, and supports the requirements engineer by answering their questions or reviewing their documents.'
  ),
  new Question(
    'What are the four different archetypes of stakeholders?',
    [
      'Doers, Powerful, Seismometers, and Observers',
      'Doers, Powerful, Seismographs, and Observers',
      'Doers, Powerful, Seismographs, and Onlookers',
      'Doers, Influencers, Seismographs, and Observers',
    ],
    'Doers, Powerful, Seismographs, and Observers'
  ),
  new Question(
    'Which representational transformations can falsify communication?',
    [
      'deletion, which means selectively forgetting experiences; generalization, which means universalizing experiences to a whole category; and distortion, which means reshaping or falsifying reality',
      'deletion, which means selectively excluding perception and experiences; generalization, which means using specific experiences to describe whole categories; and distortion, which means reshaping or falsifying reality',
      'deletion, which means selectively excluding perception and experiences; generalization, which means universalizing experiences to a whole category; and distortion, which means reshaping or falsifying reality',
      'deletion, which means selective fading out of perception; generalization, which means taking over attributes of single objects as attributes of a whole class; and distortion, which means reshaping or falsifying reality',
    ],
    'deletion, which means selectively excluding perception and experiences; generalization, which means universalizing experiences to a whole category; and distortion, which means reshaping or falsifying reality'
  ),
  new Question(
    'Which of the following qualities should requirements have?',
    [
      'full sentences using words defined in a glossary, consistent use of terms, and adherence to the SPO-rule to increase understandability',
      'full sentences using words defined in a glossary, no synonyms or homonyms, and full verbs for descriptions',
      'full sentences with proper grammar and orthography, full verbs for descriptions, and synonyms and homonyms if defined in a glossary',
      'full and grammatically correct sentences using words defined in a glossary or their synonyms, and full verbs for descriptions',
    ],
    'full sentences using words defined in a glossary, no synonyms or homonyms, and full verbs for descriptions'
  ),
  new Question(
    'What advice should be followed when selecting stakeholders?',
    [
      'Select stakeholders before the implementation phase; forgotten stakeholders can lead to expensive change requests. Integrate the Doers and the Seismographs.',
      'Select stakeholders quickly; forgotten stakeholders can lead to expensive change requests. Integrate the Observers.',
      'Select stakeholders carefully; supposed experts can mean loss of time in the project. Motivate the Doers and the Seismographs.',
      'Select stakeholders carefully; forgotten stakeholders can lead to expensive change requests. Integrate the Doers, and release those who do not have time to support.',
    ],
    'Select stakeholders carefully; forgotten stakeholders can lead to expensive change requests. Integrate the Doers, and release those who do not have time to support.'
  ),
  new Question(
    'If it turns out that the stakeholders have a low level of abstraction, which investigative techniques should be used?',
    [
      'field observation, apprenticing, brainstorming, and questionnaires',
      'brainstorming, 6-3-5-method, and change of perspective',
      'field observation, apprenticing, brainstorming, and interviews',
      'field observation, apprenticing, interview, and system archaeology',
    ],
    'field observation, apprenticing, interview, and system archaeology'
  ),
  new Question(
    'Which prototypes exist in relation to the degree of implemented functionality?',
    [
      'horizontal, which are functions in functional layers; and vertical, which are all required elements from all layers to realize functionality in a narrow width',
      'mockups and disposable prototypes',
      'reusable prototypes, such as mockups and demos; and disposable prototypes, which may be horizontal or vertical (piercing)',
      'horizontal, which are functions in functional layers; and piercing prototypes, which are some required elements from all layers to realize functionality in a narrow width',
    ],
    'horizontal, which are functions in functional layers; and vertical, which are all required elements from all layers to realize functionality in a narrow width'
  ),
  new Question(
    'What is the advantage of questionnaires?',
    [
      'Many stakeholders can be interviewed in parallel, implicit knowledge is easy to survey, and stakeholders can be locally distributed.',
      'Many stakeholders can be interviewed in parallel, digital questionnaires with open questions can be easily evaluated, and stakeholders can be locally distributed.',
      'Many stakeholders can be interviewed in parallel, digital questionnaires with closed questions can be easily evaluated, and stakeholders can be locally distributed.',
      'Many stakeholders can be interviewed in parallel, no additional interviews with stakeholders are required, and stakeholders can be locally distributed.',
    ],
    'Many stakeholders can be interviewed in parallel, digital questionnaires with closed questions can be easily evaluated, and stakeholders can be locally distributed.'
  ),
  new Question(
    'What are the advantages of mock-ups?',
    [
      'They are nearly a 1:1 representation of the real system, very detailed tuning is possible, and they are reusable for the productive implementation.',
      'They fire the stakeholder’s imagination of the future system and help to calm the stakeholder’s fear about project progress.',
      'They are nearly a 1:1 representation of the real system, GUI can be tested on different systems, and they are easy and cheap to create and customize.',
      'They are nearly a 1:1 representation of the real system, GUI can be tested on different systems, and they are testable with real values.',
    ],
    'They are nearly a 1:1 representation of the real system, GUI can be tested on different systems, and they are testable with real values.'
  ),
  new Question(
    'What is the advantage of closed questions in a defined context?',
    [
      'Closed questions provide respondents with the opportunity to answer at length.',
      'Closed questions make it easier for the interviewee to answer the questions.',
      'Closed questions have to be answered by words or sentences and deliver more information.',
      'Closed questions are easy to evaluate.',
    ],
    'Closed questions are easy to evaluate.'
  ),
  new Question(
    'As documentation exclusively in text form is disadvantageous, which elements are helpful?',
    [
      'descriptions with different levels of detail for different stakeholders, sketches, photos, hand drawings, XML models, BPMN, and EPC models',
      'process models following BPMN or the EPC method, sketches, photos, drawings, UML models and diagrams, and other semicorrect and correct specifications.',
      'process models following BPMN or the EPC method, sketches, hand drawings, UML models and diagrams, and other semiformal and formal specifications',
      'TOGAF models following BPMN or the EPC method, sketches, hand drawings, UML models and diagrams, and other semiformal and formal specifications',
    ],
    'process models following BPMN or the EPC method, sketches, hand drawings, UML models and diagrams, and other semiformal and formal specifications'
  ),
  new Question(
    'What information should be given in a user story?',
    [
      'As a <position>, I want to <function>, so that <benefit>. This is completed by information about a priority and a cost estimation.',
      'As a <role>, I want to <function>, so that <benefit>. This is completed by information about a business value and an effort estimation.',
      'As a <position, name>, I want to <function>, so that <benefit>. This is completed by information about a business value and an effort estimation.',
      'As a <role>, I want to <function>, so that <benefit>. This is completed by information about a business priority and an estimation of maximum effort.',
    ],
    'As a <role>, I want to <function>, so that <benefit>. This is completed by information about a business value and an effort estimation.'
  ),
  new Question(
    'What are the effort values of the “T-shirt sizes” Fibonacci series?',
    [
      '1 start element, S 1, M 2, L 3, 5 stepped over, XL 8, XXL 13',
      '1 1st start, 2nd start, S 2, M 3, L 5, XL 8, XXL 13',
      '1 start element, XS 1, S 2, M 3, L 5, XL 8, XXL 13',
      '1 start element, S 1, M 2, L 3, XL 5, XXL 8',
    ],
    '1 start element, XS 1, S 2, M 3, L 5, XL 8, XXL 13'
  ),
  new Question(
    'What are the four different types of documents that must be created during the preparation phase of a project?',
    [
      'project vision, which is a detailed description of targets agreed by all stakeholders; the overview level, which includes the main functions, technical interfaces, and position in system landscape; detailed requirements, which are functions with sub-functions described by text, tables, UML diagrams, etc.; and a glossary, which includes used terms and synonyms',
      'project vision, which is roughly half a page of text agreed upon by all stakeholders; the overview level, which includes the main functions, technical interfaces, and position in the system landscape; detailed requirements, which are functions with sub-functions described by text, tables, UML diagrams, etc.; and a glossary, which includes used terms and synonyms, mistakable verbs, and adjectives',
      'project vision, which is roughly half a page of text agreed upon by all stakeholders; the overview level, which includes drawings of the landscape; detailed requirements, which are functions with sub-functions described by text, tables, UML diagrams, etc.; and a glossary, which includes used terms and synonyms, mistakable verbs',
      'project vision, which is roughly half a page of text agreed upon by all stakeholders; the overview level, which includes the main persons and their roles; detailed requirements, which are functions with sub-functions described by text, tables, UML diagrams, etc.; and a glossary, which includes used terms and synonyms, mistakable verbs, and adjectives',
    ],
    'project vision, which is roughly half a page of text agreed upon by all stakeholders; the overview level, which includes the main functions, technical interfaces, and position in the system landscape; detailed requirements, which are functions with sub-functions described by text, tables, UML diagrams, etc.; and a glossary, which includes used terms and synonyms, mistakable verbs, and adjectives'
  ),
  new Question(
    'The rate of changes during requirement engineering may be high. What are adequate measures used to keep control?',
    [
      'ensure traceability of changes, treat changes with a high collateral need for change restrictively, and communicate and discuss changes with the stakeholders via a tool for requirement engineering',
      'ensure traceability of changes and be prepared for rollbacks, take care of collateral changes in related documents only, and communicate changes with the stakeholders',
      'ensure traceability of changes, manage dependencies, and communicate and discuss changes with the stakeholders to get their agreement',
      'ensure traceability of changes, take care of collateral changes in related requirements only, and communicate, and discuss changes with the stakeholders',
    ],
    'ensure traceability of changes, manage dependencies, and communicate and discuss changes with the stakeholders to get their agreement'
  ),
  new Question(
    'What are the advantages of matrix organizations over single-line organizations?',
    [
      'Equipment is shared for projects, resources are utilized to their maximum capacity, experts are easily available, the decision process works faster, and the fluctuation of staff is lower.',
      'Equipment is shared for projects, resources are utilized beyond their maximum capacity, experts are easily available, the decision process works faster, and the motivation of staff is higher.',
      'Equipment is shared for projects, resources are utilized to their maximum capacity, experts are easily available, the decision process works faster, and motivation of staff is higher.',
      'Equipment is shared for projects, resources are utilized to their maximum capacity, information flow is more intense, the decision process works faster, and errors are not quickly noticed and more quickly forgotten.',
    ],
    'Equipment is shared for projects, resources are utilized to their maximum capacity, experts are easily available, the decision process works faster, and motivation of staff is higher.'
  ),
  new Question(
    'What are the four elements used in business processes?',
    [
      'activity as an executable unit; status, which is documenting the state or status of an activity; event, which is a trigger from outside a process; and business objects, which are tangible objects',
      'activity as an executable unit; status, which is documenting the state or status of a process, activity, or business object; event, which is the trigger or result of a process; and business objects, which are tangible or intangible objects',
      'activity as an executable, “atomic” unit; status, which is documenting the state or status of process or activity; event, which is the trigger or result of a process; and business objects, which are Word or Excel files',
      'organizational unit to which task holders and competencies are assigned; status, which is documenting the state or status of process or activity; and business objects, which are intangible objects only',
    ],
    'activity as an executable unit; status, which is documenting the state or status of a process, activity, or business object; event, which is the trigger or result of a process; and business objects, which are tangible or intangible objects'
  ),
  new Question(
    'Why is the documentation of processes in a company useful?',
    [
      'Only the employees in production know how processes should work; beginners in the company can be trained faster; and companies can prove their maturity, e.g., for certifications like ISO9001 and ISO27001.',
      'All employees have the same idea of how things should be done, the workers council gets better control over violations of labor law and safety regulations, and companies can improve their processes to reduce costs and produce faster.',
      'All employees have the same idea of how things should be done; beginners in the company can be trained faster; and companies can prove their maturity, e.g., for certifications like ISO9001 and ISO27001.',
      'The company can prove to its customers how it works and ensures quality of products, documented processes are the basis of digitalization, and process management replaces knowledge management.',
    ],
    'All employees have the same idea of how things should be done; beginners in the company can be trained faster; and companies can prove their maturity, e.g., for certifications like ISO9001 and ISO27001.'
  ),
  new Question(
    'What are the different types of connectors in EPC?',
    [
      'OR, XOR, and split',
      'split and join',
      'event gateway, XOR, and AND',
      'OR, XOR, and AND',
    ],
    'OR, XOR, and AND'
  ),
  new Question(
    'What are the strict rules that must be followed in order to keep BPMN process models unambiguous and easy to read?',
    [
      'All shapes in a model are connected, i.e., there are no breaks between shapes in a process and there are no unconnected shapes; shapes have only one input and one output connector; and splitting or merging is realized by introducing more than one input and output.',
      'All shapes in a model are connected, i.e., there are no breaks between shapes in a process and unconnected shapes must be commented on; except gateways, all shapes have only one input and one output connector; and splitting or merging is realized exclusively via gateways.',
      'All shapes in a model are connected, i.e., there are no breaks between shapes in a process and there are no unconnected shapes; except gateways, all shapes have only one input and one output connector; and splitting or merging is realized exclusively via gateways.',
      'All shapes in a model are connected, i.e., there are no breaks between shapes in a process and there are no unconnected shapes; all shapes have only one input and one output connector; and splitting or merging is realized exclusively via gateways.',
    ],
    'All shapes in a model are connected, i.e., there are no breaks between shapes in a process and there are no unconnected shapes; except gateways, all shapes have only one input and one output connector; and splitting or merging is realized exclusively via gateways.'
  ),
  new Question(
    'Which elements does the UML use case diagram contain?',
    [
      'a system frame, which separates elements inside from those outside; a use case name containing a verb, showing connections with other uses cases or actors; and an actor, which is a role or another system always outside the system boundary',
      'a system frame, which is separating elements inside and outside with a label for a title; a use case showing relationships by communication only; and an actor, which is a role or another system inside or outside the system boundary.',
      'a system frame, which exclusively binds use cases together; a use case with single activities, showing connections with other uses cases or actors; and an actor, which is a role or another system always outside the system boundary.',
      'a system frame, which separates elements inside and outside; a use case including single activity steps; and an actor, which is a role or another system always outside the system boundary',
    ],
    'a system frame, which separates elements inside from those outside; a use case name containing a verb, showing connections with other uses cases or actors; and an actor, which is a role or another system always outside the system boundary'
  ),
  new Question(
    'Which elements does the UML activity diagram contain?',
    [
      'actions determining the behavior of the activity; activities, which are complex actions which can and will be modeled with further details; control flows, which are edges with arrowheads; a decision node, which splits based on XOR; merge mode, which is based on AND; parallelization, which is based on AND or OR; and synchronization, which is the merging of incoming flows based on definable conditions',
      'actions determining the behavior of the activity; activities, which are complex actions that can and will be modeled with further details; control flows, which are edges with no, one, or two arrowheads; a decision node, which splits based on XOR; merge mode, which is based on OR; parallelization, which is based on AND or OR; and synchronization, which is the merging of incoming flows based on the AND condition',
      'actions determining the behavior of the activity; activities, which are complex actions that can and will be modeled with further details; control flows, which are edges with arrowheads; a decision node, which splits based on XOR; merge mode, which is based on OR; parallelization, which is based on AND or OR; synchronization, which is the merging of incoming flows based on the AND condition',
      'actions determining the behavior of the activity; activities, which are complex actions that can and will be modeled with further details; control flows, which are edges with a single arrowhead; a decision node, which splits splitting based on OR; merge mode, which is based on OR; parallelization, which is based on AND or OR; and synchronization, which is the merging of incoming flows',
    ],
    'actions determining the behavior of the activity; activities, which are complex actions that can and will be modeled with further details; control flows, which are edges with arrowheads; a decision node, which splits based on XOR; merge mode, which is based on OR; parallelization, which is based on AND or OR; synchronization, which is the merging of incoming flows based on the AND condition'
  ),
  new Question(
    'Which elements are used in the UML class diagram?',
    [
      'class, which corresponds to a business entity or object; class with attributes but without operations; relation or associations between classes where the arrowhead defines the direction of dependency; and multiplicities to specify the quantities of relations',
      'class, which is a set of objects that have a similar specification of features, constraints, and semantics; class with attributes and operations; relations or associations between classes, which have a different meaning depending on whether they are with or without arrowheads; and multiplicities, which define the number of objects in a class.',
      'class, which is a set of objects that have a similar specification of features, constraints, and semantics; class with operations; relations or associations between classes, where arrowheads indicate the direction of inheritance; and multiplicities to specify the quantities',
      'class, which corresponds to a business entity or object; class with attributes and operations; relations or associations between classes, which have a different meaning depending on whether they are with or without arrowheads; and multiplicities to specify the quantities of relations',
    ],
    'class, which corresponds to a business entity or object; class with attributes and operations; relations or associations between classes, which have a different meaning depending on whether they are with or without arrowheads; and multiplicities to specify the quantities of relations'
  ),
  new Question(
    'Which elements are used in the UML state diagram?',
    [
      'state, which is the technical situation or an activity to start the transition; start and end states, which mark the start and end point(s) in the diagram; state transition, which is the transfer from one state to another state; split of transition flow by decision; and join of different transitions',
      'state, which is the technical situation of an object or a system; start and end states, which mark the start and end point in the diagram; state transition, which is the transfer from one state to another state in activity diagrams; split of transition flow based on OR and AND logical decisions; and join of different transitions based on OR decision.',
      'state, which is the technical situation or an activity to start the transition; start and end states, which mark the start and end point in the diagram; state transition, which determines the order of the states; split of transition flow; and join of different transitions',
      'state, which is the technical situation of an object or a system; start and end states, which mark the start and end point in the diagram; state transition, which determines the order of the states and means transfer between different states; split of transition flow; and join of different transitions',
    ],
    'state, which is the technical situation of an object or a system; start and end states, which mark the start and end point in the diagram; state transition, which determines the order of the states and means transfer between different states; split of transition flow; and join of different transitions'
  ),
  new Question(
    'What criteria should be used for consistency checking?',
    [
      'coordination of each requirement with all interested stakeholders, coordination after changed requirements, check resolution of conflicts, and check granted approval',
      'coordination of each requirement with all stakeholders, coordination of changed requirements with stakeholders involved in changes, check resolution of conflicts, and check granted approval',
      'coordination of each requirement with all stakeholders, coordination after changed requirements, convince stakeholders to settle their conflicts, and convince stakeholders to grant their approval',
      'coordination of each requirement with all stakeholders, coordination after changed requirements, check resolution of conflicts, and check granted approval',
    ],
    'coordination of each requirement with all stakeholders, coordination after changed requirements, check resolution of conflicts, and check granted approval'
  ),
  new Question(
    'What review criteria should be applied to documentation?',
    [
      'conformity to document structure, conformity to documentation rules and format, comprehensibility by using simple sentences avoiding technical terms, and unambiguity',
      'conformity to document structure and documentation rules, conformity to language rules, integrity of chapters, comprehensibility, and unambiguity',
      'conformity to document structure, conformity to documentation rules and format, comprehensibility, and unambiguity',
      'conformity to document structure, conformity to documentation rules and format, comprehensibility, and unambiguity by avoiding homonyms and synonyms',
    ],
    'conformity to document structure, conformity to documentation rules and format, comprehensibility, and unambiguity'
  ),
  new Question(
    'When planning reviews, which principles should be established?',
    [
      'involving the right stakeholders, agreeing that whoever finds an error should correct it in any case, reviewing from different perspectives, keeping the documentation form the same in every case, and repeated testing or reviewing',
      'selecting the right stakeholders and assigning different review perspectives to them, separating fault detection from fault correction, appropriately changing documentation form, constructing of development artifacts, and repeated testing or reviewing',
      'involving the right stakeholders for different review perspectives, separating fault detection from fault correction, appropriately changing documentation form, and repeated testing or reviewing until no more errors are found',
      'involving the right stakeholders for different review perspectives, separating fault detection from fault correction, keeping the documentation form the same in every case, constructing development artifacts, and repeated testing or reviewing',
    ],
    'selecting the right stakeholders and assigning different review perspectives to them, separating fault detection from fault correction, appropriately changing documentation form, constructing of development artifacts, and repeated testing or reviewing'
  ),
  new Question(
    'How is a walkthrough executed?',
    [
      'Distribute the requirements to be reviewed and the relevant review criteria, and define a date for the walkthrough after an interval that gives sufficient time for a careful review. On this date, the author presents their requirements (especially those marked in the returned documents) and the minute-taker documents the agreed changes.',
      'Distribute the requirements to be reviewed and the relevant review criteria, and define a short-term deadline for the walkthrough in order to be able to complete the review quickly. On this date, the author presents their requirements (especially those marked in the returned documents) and the minute-taker documents the agreed changes.',
      'Distribute the requirements to be reviewed and the expected review results, and define a date for the walkthrough after an interval that speeds up the review process. On this date, the author presents their requirements (especially those marked in the returned documents) and the requirements engineer documents the agreed changes.',
      'Distribute the requirements to be reviewed and the relevant review criteria, and define a date for the walkthrough after a sufficient time interval. The participants should have returned the reviewed documents. On this date, the reviewers present their requirements (especially those comments marked in the returned documents).',
    ],
    'Distribute the requirements to be reviewed and the relevant review criteria, and define a date for the walkthrough after an interval that gives sufficient time for a careful review. On this date, the author presents their requirements (especially those marked in the returned documents) and the minute-taker documents the agreed changes.'
  ),
  new Question(
    'What are the advantages of using checklists in review methods?',
    [
      'prevent things from being forgotten, help the reviewer to focus, and ensure that repeated procedures are always done in the same way',
      'prevent things from being forgotten, help the reviewer to better understand the requirements, and ensure that repeated procedures are always done in the same way',
      'prevent reviewers from doing undesirable things, help the reviewer not to lose focus, and ensure that repeated procedures are always done in the same way',
      'prevent things from being forgotten, enable the requirements engineer to add longer instructions for the review, and ensure that repeated procedures are always done in the same way',
    ],
    'prevent things from being forgotten, help the reviewer to focus, and ensure that repeated procedures are always done in the same way'
  ),
  new Question(
    'What does the acronym MoSCoW stand for?',
    [
      'must have, should have, could have, wish to have',
      'meticulous, sharp, correct, or weird',
      'must have, should have, could have, won’t have',
      'must have, should have, can have, won’t have',
    ],
    'must have, should have, could have, won’t have'
  ),
  new Question(
    'What factors influence the sequence in which requirements will be realized?',
    [
      'risk, criticality, and priority',
      'value for the customer, criticality, and priority',
      'risk, value for the customer, and priority',
      'risk, value for the customer, criticality, and priority',
    ],
    'risk, value for the customer, criticality, and priority'
  ),
  new Question(
    'What are the three categories that define requirements according to their importance for users?',
    [
      'basic, power, and delight',
      'basic, performance, and delight',
      'basic, performance, and surprise',
      'basic, delight, and surprise',
    ],
    'basic, performance, and delight'
  ),
  new Question(
    'In the team estimation game, which two activities are allowed to sort the requirements?',
    [
      'taking two requirement cards from the deck and defining their importance by dropping them left or right of the other spread cards, and swapping two requirement cards, thus changing their importance',
      'taking a requirement card from the deck and defining, e.g., the importance, by dropping it left or right of the other spread cards, and swapping two requirement cards, thus changing their importance',
      'taking a requirement card from the deck and dropping it on the other spread cards, finding a place that is appropriate to the importance of this requirement (if no decision can be made, leave the card in the deck), and swapping two requirement cards, thus changing their importance',
      'taking a requirement card from the deck and defining the importance by dropping it left or right of the other spread cards, and moving a requirement card back to the deck and finding another card to fill the gap',
    ],
    'taking a requirement card from the deck and defining the importance by dropping it left or right of the other spread cards, and moving a requirement card back to the deck and finding another card to fill the gap'
  ),
  new Question(
    'Why can the classification of attributes into the three categories change over time?',
    [
      'The application user expects that, by the usage of artificial intelligence, amount and quality of input required from them can be reduced.',
      'The widespread implementation of former “delight attributes” in other products and the users’ habituation to them makes them “basic attributes” in the long run.',
      'Speech input and output is a must for computers. The generation of reports and graphics are therefore no longer “delight attributes” in applications.',
      'The way of working, which has changed over the years, let “delight attributes” become “basic attributes” over time.',
    ],
    'The widespread implementation of former “delight attributes” in other products and the users’ habituation to them makes them “basic attributes” in the long run.'
  ),
  new Question(
    'Which of the following tasks belong to the requirements engineers role?',
    [
      'Lead the change management process within the project',
      'Moderate and mediate between stakeholders and project members.',
      'Coach and lead developers within the scrum teams.',
      'Mentor the project manager to complete the project within budget.',
    ],
    'Moderate and mediate between stakeholders and project members.'
  ),
  new Question(
    'Which of the following is a variant of written brainstorming?',
    [
      'Design thinking',
      'Interview with questionnaire',
      'Apprenticing',
      'Written brainstorming with user stories',
    ],
    'Written brainstorming with user stories'
  ),
  new Question(
    'According to Kano, a delight attribute …',
    [
      'leads to failure.',
      'surprises the user.',
      'is explicitly demanded.',
      'dissatisfies the user.',
    ],
    'surprises the user.'
  ),
  new Question(
    'What is true about lanes in BPMN?',
    [
      'A lane is used for the execution of activities.',
      'A lane is always located within a specific pool.',
      'A lane is executed in the process and is atomic.',
      'A lane allows further comments or notes to each flow object.',
    ],
    'A lane is always located within a specific pool.'
  ),
  new Question(
    'Which of the following is not defined as a V-Modell XT process module?',
    ['results', 'tools', 'tasks', 'roles'],
    'tools'
  ),
  new Question(
    'Which statement about UML activity diagrams is correct?',
    [
      'UML activity diagrams are used to document the functional states of a system.',
      'UML activity diagrams are used to model business objects and systems.',
      'UML activity diagrams are used to determine the system context.',
      'UML activity diagrams are used to refine and detail use cases.',
    ],
    'UML activity diagrams are used to refine and detail use cases.'
  ),
  new Question(
    'Which investigation technique should you choose when the stakeholders have low motivation to actively participate?',
    [
      'System archeology',
      'Design thinking',
      'Change of perspective',
      'Apprenticing',
    ],
    'System archeology.'
  ),
  new Question(
    'What is a disadvantage of formal specification in requirements documentation?',
    [
      'Programming skills are needed to understand it.',
      'It is always ambiguous due to missing structure.',
      'Creation is time consuming as the text is very long.',
      'Modeling language must be defined to use it correctly.',
    ],
    'Programming skills are needed to understand it.'
  ),
];

let quiz = new Quiz(questions);

//display question
displayQuestion();

//ADD A COUNTDOWN

let time = 30;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById('count-down');

function startCountdown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000);
}

startCountdown();
