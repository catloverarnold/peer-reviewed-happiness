const QUOTES = [
  {
    "quote": "Build your day around what expands you, not what merely excites you.",
    "summary": "Positive emotions are treated as resources that widen attention and help people build durable skills, relationships, and resilience.",
    "source": "Anne M. Conway, Michele M. Tugade, Lahnna I. Catalino, and Barbara L. Fredrickson, \"The Broaden-and-Build Theory of Positive Emotions\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose challenges that ask for your full attention without asking you to abandon yourself.",
    "summary": "Flow research points to the happiness value of skill-matched challenge, deep absorption, and activities that feel worthwhile in themselves.",
    "source": "Antonella Delle Fave, \"Past, Present, and Future of Flow\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Name the feeling before you obey it.",
    "summary": "Emotional intelligence research frames well-being as partly shaped by noticing, understanding, and using emotions rather than being driven by them.",
    "source": "Alia J. Crum and Peter Salovey, \"Emotionally Intelligent Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Let belonging do some of the work that discipline cannot.",
    "summary": "Research on religious and communal engagement often highlights social support, meaning, ritual, and shared values as routes to well-being.",
    "source": "David G. Myers, \"Religious Engagement and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not chase positivity so hard that you lose contact with reality.",
    "summary": "Self-regulatory perspectives warn that positive experiences help most when they are flexible, grounded, and integrated with difficult emotions.",
    "source": "Patty Ferssizidis, Todd B. Kashdan, Rachel A. Marquart, and Michael F. Steger, \"Positive Psychological Experiences and Psychopathology\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness works better as a practice than as a trophy.",
    "summary": "Studies on the rewards of happiness suggest happier people often build stronger relationships, work outcomes, and health patterns over time.",
    "source": "Katherine Jacobs Bao and Sonja Lyubomirsky, \"The Rewards of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Pay attention to your life as experienced, not only your life as explained.",
    "summary": "Subjective well-being research separates lived emotion, life satisfaction, and domain satisfaction so people can see where life actually feels good.",
    "source": "William Pavot and Ed Diener, \"Happiness Experienced: The Science of Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A good life needs both pleasure and proof that your days matter.",
    "summary": "Good-life frameworks distinguish pleasant feelings from meaningful functioning, showing why fulfillment requires more than temporary mood boosts.",
    "source": "Ruut Veenhoven, \"Notions of the Good Life\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Track the ordinary signals: mood, connection, energy, meaning, and peace.",
    "summary": "Subjective well-being studies use repeated judgments of life and emotion to understand how people evaluate their lives across contexts.",
    "source": "Felicity F. Miao, Minkyung Koo, and Shigehiro Oishi, \"Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Measure what you want to grow, but do not reduce your life to the measure.",
    "summary": "Well-being measurement research shows that happiness is multi-dimensional and needs careful assessment across feelings, evaluations, and functioning.",
    "source": "Robert A. Cummins, \"Measuring Happiness and Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Live by values that can survive a bad mood.",
    "summary": "Eudaimonic research emphasizes growth, virtue, authenticity, and purpose as foundations for a life that feels deeply worthwhile.",
    "source": "Veronika Huta, \"Eudaimonia\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Autonomy is not doing whatever you want; it is endorsing the life you are actually living.",
    "summary": "Self-determination theory links well-being to autonomy, competence, relatedness, awareness, and goals chosen for their own worth.",
    "source": "Christopher P. Niemiec and Richard M. Ryan, \"Autonomy and its Relation to Full Functioning and Organismic Wellness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A full life lets you feel, evaluate, and function better.",
    "summary": "Functional well-being models combine emotion, life appraisal, and effective functioning instead of treating happiness as one single feeling.",
    "source": "Joar Vittersø, \"Functional Well-being: Happiness as Feelings, Evaluations, and Functioning\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not inherit someone else’s definition of the good life without testing it.",
    "summary": "Historical accounts show that happiness has carried different meanings across eras, making reflection on one’s own definition essential.",
    "source": "Darrin M. McMahon, \"The Pursuit of Happiness in History\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness is not only private comfort; it is also right relationship with people and obligations.",
    "summary": "Early Chinese thought often ties well-being to character, harmony, cultivation, and the quality of one’s role in community.",
    "source": "Philip J. Ivanhoe, \"Happiness in Early Chinese Thought\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Ask whether your happiness is shallow relief or a life you can stand behind.",
    "summary": "Philosophical work on happiness distinguishes mood, life satisfaction, and deeper forms of psychic affirmation or flourishing.",
    "source": "Daniel M. Haybron, \"The Nature and Significance of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Use philosophy to clean up vague desires before you build your life around them.",
    "summary": "Philosophical methods help clarify what counts as happiness, what makes it valuable, and how evidence should be interpreted.",
    "source": "Valerie Tiberius, \"Philosophical Methods in Happiness Research\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Train the mind toward compassion, because self-absorption is a small room.",
    "summary": "Buddhist approaches connect durable happiness with attention, compassion, reduced craving, and freedom from habitual mental grasping.",
    "source": "Matthieu Ricard, \"A Buddhist View of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Treat happiness as something that happens between people, not only inside one person.",
    "summary": "Relational Buddhist psychology frames well-being as emerging through kindness, dialogue, interdependence, and shared meaning.",
    "source": "G. T. Maurits Kwee, \"Relational Buddhism: An Integrative Psychology of Happiness amidst Existential Suffering\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A quiet mind is not empty; it is available.",
    "summary": "Meditation and mindfulness research links present-centered awareness with concentration, empathy, autonomy, and reduced rumination.",
    "source": "Peter Malinowski, \"Flourishing through Meditation and Mindfulness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Give your nervous system places where nothing has to be won.",
    "summary": "Low-arousal routes to happiness highlight silence, contemplation, gentle attention, and calm absorption as undervalued paths to contentment.",
    "source": "Jane Henry, \"Quieting the Mind and Low Arousal Routes to Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Money helps most when it buys stability, freedom, and time, not an endless scoreboard.",
    "summary": "Economic happiness research examines how income, incentives, comparison, unemployment, and choice shape life satisfaction.",
    "source": "Bruno S. Frey and Alois Stutzer, \"Economics and the Study of Individual Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not compare your life with a culture that rewards different things.",
    "summary": "Cross-national well-being research shows that happiness depends on cultural context, values, institutions, and how well-being is defined.",
    "source": "William Tov and Evelyn W. M. Au, \"Comparing Well-being Across Nations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Where you live quietly teaches you what to expect from life.",
    "summary": "Geography of happiness research links place, inequality, opportunity, health, and local conditions to well-being.",
    "source": "Dimitris Ballas and Danny Dorling, \"The Geography of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Buy less identity and build more life.",
    "summary": "Consumer society research warns that material aspiration can shape happiness through status, meaning, identity, and comparison.",
    "source": "Aaron Ahuvia and Elif Izberk-Bilgin, \"Well-being in Consumer Societies\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A fulfilling life should not require a world that burns out to support it.",
    "summary": "Sustainable well-being research connects human flourishing with ecological limits, social fairness, and long-term development.",
    "source": "Sam Thompson, Nic Marks, and Tim Jackson, \"Well-being and Sustainable Development\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Education should train attention, judgment, character, and joy, not only performance.",
    "summary": "Education and well-being research argues that schools shape happiness through purpose, capability, relationships, and values.",
    "source": "John White, \"Education and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Resilience is built before the storm, in small rehearsals of coping.",
    "summary": "School resilience research studies social-emotional skills, optimistic thinking, problem solving, and supportive environments.",
    "source": "Toni Noble and Helen McGrath, \"Well-being and Resilience in Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A classroom can teach people how to notice what is good without denying what is hard.",
    "summary": "Classroom happiness work applies gratitude, strengths, positive emotion, and reflective practice to learning environments.",
    "source": "Jennifer M. Fox Eades, Carmel Proctor, and Martin Ashley, \"Happiness in the Classroom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Practice bouncing back while the stakes are low.",
    "summary": "Resilience education draws on prevention science and positive psychology to build coping skills before serious distress appears.",
    "source": "Jane E. Gillham, Rachel M. Abenavoli, Steven M. Brunwasser, Mark Linkins, Karen J. Reivich, and Martin E. P. Seligman, \"Resilience Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Wisdom is knowing which good thing matters most right now.",
    "summary": "Wisdom education research emphasizes balancing personal, interpersonal, and broader interests over short-term cleverness.",
    "source": "Robert J. Sternberg, \"Teaching for Wisdom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Culture beats slogans: build environments where well-being is normal behavior.",
    "summary": "Positive education case work shows that well-being improves when practices are embedded into school culture, staff training, and daily routines.",
    "source": "Mathew A. White, \"Positive Education at Geelong Grammar School\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Make your work a place where people can do good, not just get through tasks.",
    "summary": "Organizational virtuousness research links compassion, forgiveness, integrity, and meaning with flourishing workplaces.",
    "source": "Kim S. Cameron and Arran Caza, \"Virtuousness as a Source of Happiness in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A job shapes you, so shape the job back.",
    "summary": "Work and well-being research examines how identity, calling, task meaning, and workplace relationships affect happiness.",
    "source": "Brianna Barker Caza and Amy Wrzesniewski, \"How Work Shapes Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Design work so effort has room to become energy instead of depletion.",
    "summary": "Work design research links autonomy, feedback, challenge, support, and active job crafting with employee well-being.",
    "source": "Ben J. Searle and Sharon K. Parker, \"Work Design and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Confidence, hope, optimism, and resilience are not moods; they are working assets.",
    "summary": "Psychological capital research treats these capacities as developable resources that support performance and well-being.",
    "source": "Carolyn M. Youssef and Fred Luthans, \"Managing Psychological Capital in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Notice your best self when it shows up, then build conditions that invite it back.",
    "summary": "Reflected best-self research uses positive identity feedback to help people align work with vitality and value creation.",
    "source": "Laura Morgan Roberts, \"Reflected Best Self Engagement at Work\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "The quality of closeness matters more than the label attached to it.",
    "summary": "Close relationship research links well-being more strongly to relationship quality, support, and responsiveness than status alone.",
    "source": "Shimon Saphire-Bernstein and Shelley E. Taylor, \"Close Relationships and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your attachment patterns affect how much joy you can receive.",
    "summary": "Attachment research studies how security, avoidance, and anxiety shape the experience and consequences of positive emotions.",
    "source": "Mario Mikulincer and Phillip R. Shaver, \"Adult Attachment and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Support works best when it feels reliable, respectful, and real.",
    "summary": "Perceived social support research shows that feeling supported is tied to personality, relational processes, stress buffering, and happiness.",
    "source": "Brian Lakey, \"Perceived Social Support and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Friendship is not a side quest; it is part of the architecture of happiness.",
    "summary": "Friendship research points to intimacy, companionship, support, and conflict management as major contributors to well-being.",
    "source": "Melikşah Demir, Haley Orthel, and Adrian Keith Andelin, \"Friendship and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your mind was not designed only for happiness, so build systems that help it flourish anyway.",
    "summary": "Evolutionary perspectives examine why threat sensitivity, comparison, and desire can interfere with happiness and how people can work around them.",
    "source": "Sarah E. Hill, Danielle J. DelPriore, and Brett Major, \"An Evolutionary Psychological Perspective on Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your baseline is not a prison sentence.",
    "summary": "Set-point debates examine stability in happiness while leaving room for life changes, practices, and social conditions to shift well-being.",
    "source": "Bruce Headey, \"Set-Point Theory May Now Need Replacing\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Keep enough variety in your good life that your brain does not turn it invisible.",
    "summary": "Hedonic adaptation research suggests novelty, appreciation, and varied positive practices can help preserve gains in happiness.",
    "source": "Kennon M. Sheldon, Julia Boehm, and Sonja Lyubomirsky, \"Variety is the Spice of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mental health is more than not being ill; it is having signs of life.",
    "summary": "Complete mental health research distinguishes languishing from flourishing across emotional, psychological, and social well-being.",
    "source": "Corey L. M. Keyes, \"Promotion and Protection of Positive Mental Health\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Growth after pain is not automatic, but meaning can be rebuilt.",
    "summary": "Post-traumatic growth research studies positive psychological change after adversity through meaning, relationships, strength, and possibility.",
    "source": "Stephen Joseph and Kate Hefferon, \"Post-traumatic Growth\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Meaning needs structure: values, goals, story, and daily evidence.",
    "summary": "Lifelong meaning models frame purpose and coherence as an architectural framework that stabilizes existence across time.",
    "source": "Michael F. Steger, Anna Beeby, Samantha Garrett, and Todd B. Kashdan, \"Creating a Stable Architectural Framework of Existence\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Small exercises matter when they are repeated long enough to become a life pattern.",
    "summary": "Self-help intervention research reviews practices such as gratitude, strengths, kindness, and optimism that can improve well-being for some people.",
    "source": "Acacia C. Parks, Stephen M. Schueller, and Arber Tasimi, \"Increasing Happiness in the General Population\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not only remove symptoms; build strengths that make life worth entering again.",
    "summary": "Positive psychotherapy applies strengths, meaning, gratitude, savoring, and positive relationships to clinical well-being.",
    "source": "Tayyab Rashid, \"Positive Psychology in Practice: Positive Psychotherapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose valued action over perfect emotional weather.",
    "summary": "Acceptance and Commitment Therapy links well-being to values, committed action, psychological flexibility, and acceptance of internal experience.",
    "source": "Louise Hayes, \"Happiness in Valued Living: Acceptance and Commitment Therapy as a Model for Change\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Coaching works when insight becomes designed behavior.",
    "summary": "Coaching evidence connects goal-setting, self-regulation, accountability, and reflective practice with improved well-being.",
    "source": "Gordon B. Spence and Anthony M. Grant, \"Coaching and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mindfulness is the skill of meeting the moment before your habits rewrite it.",
    "summary": "Mindfulness research in older adults highlights attention, openness, cognitive flexibility, and well-being across later life.",
    "source": "Laura M. Hsu and Ellen J. Langer, \"Mindfulness and Cultivating Well-being in Older Adults\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Recovery is not only symptom reduction; it is the return of purpose, mastery, and connection.",
    "summary": "Well-being therapy focuses on identifying and extending episodes of well-being while reducing patterns that interrupt them.",
    "source": "Giovanni A. Fava and Chiara Ruini, \"Well-being Therapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "People heal better in systems that expect capability, not permanent deficit.",
    "summary": "Collaborative recovery approaches build positive institutions around hope, strengths, autonomy, and meaningful recovery goals.",
    "source": "Lindsay G. Oades, Trevor P. Crowe, and Frank P. Deane, \"The Collaborative Recovery Model\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Build your day around what expands you, not what merely excites you.",
    "summary": "Positive emotions are treated as resources that widen attention and help people build durable skills, relationships, and resilience.",
    "source": "Anne M. Conway, Michele M. Tugade, Lahnna I. Catalino, and Barbara L. Fredrickson, \"The Broaden-and-Build Theory of Positive Emotions\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose challenges that ask for your full attention without asking you to abandon yourself.",
    "summary": "Flow research points to the happiness value of skill-matched challenge, deep absorption, and activities that feel worthwhile in themselves.",
    "source": "Antonella Delle Fave, \"Past, Present, and Future of Flow\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Name the feeling before you obey it.",
    "summary": "Emotional intelligence research frames well-being as partly shaped by noticing, understanding, and using emotions rather than being driven by them.",
    "source": "Alia J. Crum and Peter Salovey, \"Emotionally Intelligent Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Let belonging do some of the work that discipline cannot.",
    "summary": "Research on religious and communal engagement often highlights social support, meaning, ritual, and shared values as routes to well-being.",
    "source": "David G. Myers, \"Religious Engagement and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not chase positivity so hard that you lose contact with reality.",
    "summary": "Self-regulatory perspectives warn that positive experiences help most when they are flexible, grounded, and integrated with difficult emotions.",
    "source": "Patty Ferssizidis, Todd B. Kashdan, Rachel A. Marquart, and Michael F. Steger, \"Positive Psychological Experiences and Psychopathology\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness works better as a practice than as a trophy.",
    "summary": "Studies on the rewards of happiness suggest happier people often build stronger relationships, work outcomes, and health patterns over time.",
    "source": "Katherine Jacobs Bao and Sonja Lyubomirsky, \"The Rewards of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Pay attention to your life as experienced, not only your life as explained.",
    "summary": "Subjective well-being research separates lived emotion, life satisfaction, and domain satisfaction so people can see where life actually feels good.",
    "source": "William Pavot and Ed Diener, \"Happiness Experienced: The Science of Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A good life needs both pleasure and proof that your days matter.",
    "summary": "Good-life frameworks distinguish pleasant feelings from meaningful functioning, showing why fulfillment requires more than temporary mood boosts.",
    "source": "Ruut Veenhoven, \"Notions of the Good Life\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Track the ordinary signals: mood, connection, energy, meaning, and peace.",
    "summary": "Subjective well-being studies use repeated judgments of life and emotion to understand how people evaluate their lives across contexts.",
    "source": "Felicity F. Miao, Minkyung Koo, and Shigehiro Oishi, \"Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Measure what you want to grow, but do not reduce your life to the measure.",
    "summary": "Well-being measurement research shows that happiness is multi-dimensional and needs careful assessment across feelings, evaluations, and functioning.",
    "source": "Robert A. Cummins, \"Measuring Happiness and Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Live by values that can survive a bad mood.",
    "summary": "Eudaimonic research emphasizes growth, virtue, authenticity, and purpose as foundations for a life that feels deeply worthwhile.",
    "source": "Veronika Huta, \"Eudaimonia\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Autonomy is not doing whatever you want; it is endorsing the life you are actually living.",
    "summary": "Self-determination theory links well-being to autonomy, competence, relatedness, awareness, and goals chosen for their own worth.",
    "source": "Christopher P. Niemiec and Richard M. Ryan, \"Autonomy and its Relation to Full Functioning and Organismic Wellness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A full life lets you feel, evaluate, and function better.",
    "summary": "Functional well-being models combine emotion, life appraisal, and effective functioning instead of treating happiness as one single feeling.",
    "source": "Joar Vittersø, \"Functional Well-being: Happiness as Feelings, Evaluations, and Functioning\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not inherit someone else’s definition of the good life without testing it.",
    "summary": "Historical accounts show that happiness has carried different meanings across eras, making reflection on one’s own definition essential.",
    "source": "Darrin M. McMahon, \"The Pursuit of Happiness in History\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness is not only private comfort; it is also right relationship with people and obligations.",
    "summary": "Early Chinese thought often ties well-being to character, harmony, cultivation, and the quality of one’s role in community.",
    "source": "Philip J. Ivanhoe, \"Happiness in Early Chinese Thought\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Ask whether your happiness is shallow relief or a life you can stand behind.",
    "summary": "Philosophical work on happiness distinguishes mood, life satisfaction, and deeper forms of psychic affirmation or flourishing.",
    "source": "Daniel M. Haybron, \"The Nature and Significance of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Use philosophy to clean up vague desires before you build your life around them.",
    "summary": "Philosophical methods help clarify what counts as happiness, what makes it valuable, and how evidence should be interpreted.",
    "source": "Valerie Tiberius, \"Philosophical Methods in Happiness Research\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Train the mind toward compassion, because self-absorption is a small room.",
    "summary": "Buddhist approaches connect durable happiness with attention, compassion, reduced craving, and freedom from habitual mental grasping.",
    "source": "Matthieu Ricard, \"A Buddhist View of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Treat happiness as something that happens between people, not only inside one person.",
    "summary": "Relational Buddhist psychology frames well-being as emerging through kindness, dialogue, interdependence, and shared meaning.",
    "source": "G. T. Maurits Kwee, \"Relational Buddhism: An Integrative Psychology of Happiness amidst Existential Suffering\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A quiet mind is not empty; it is available.",
    "summary": "Meditation and mindfulness research links present-centered awareness with concentration, empathy, autonomy, and reduced rumination.",
    "source": "Peter Malinowski, \"Flourishing through Meditation and Mindfulness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Give your nervous system places where nothing has to be won.",
    "summary": "Low-arousal routes to happiness highlight silence, contemplation, gentle attention, and calm absorption as undervalued paths to contentment.",
    "source": "Jane Henry, \"Quieting the Mind and Low Arousal Routes to Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Money helps most when it buys stability, freedom, and time, not an endless scoreboard.",
    "summary": "Economic happiness research examines how income, incentives, comparison, unemployment, and choice shape life satisfaction.",
    "source": "Bruno S. Frey and Alois Stutzer, \"Economics and the Study of Individual Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not compare your life with a culture that rewards different things.",
    "summary": "Cross-national well-being research shows that happiness depends on cultural context, values, institutions, and how well-being is defined.",
    "source": "William Tov and Evelyn W. M. Au, \"Comparing Well-being Across Nations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Where you live quietly teaches you what to expect from life.",
    "summary": "Geography of happiness research links place, inequality, opportunity, health, and local conditions to well-being.",
    "source": "Dimitris Ballas and Danny Dorling, \"The Geography of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Buy less identity and build more life.",
    "summary": "Consumer society research warns that material aspiration can shape happiness through status, meaning, identity, and comparison.",
    "source": "Aaron Ahuvia and Elif Izberk-Bilgin, \"Well-being in Consumer Societies\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A fulfilling life should not require a world that burns out to support it.",
    "summary": "Sustainable well-being research connects human flourishing with ecological limits, social fairness, and long-term development.",
    "source": "Sam Thompson, Nic Marks, and Tim Jackson, \"Well-being and Sustainable Development\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Education should train attention, judgment, character, and joy, not only performance.",
    "summary": "Education and well-being research argues that schools shape happiness through purpose, capability, relationships, and values.",
    "source": "John White, \"Education and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Resilience is built before the storm, in small rehearsals of coping.",
    "summary": "School resilience research studies social-emotional skills, optimistic thinking, problem solving, and supportive environments.",
    "source": "Toni Noble and Helen McGrath, \"Well-being and Resilience in Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A classroom can teach people how to notice what is good without denying what is hard.",
    "summary": "Classroom happiness work applies gratitude, strengths, positive emotion, and reflective practice to learning environments.",
    "source": "Jennifer M. Fox Eades, Carmel Proctor, and Martin Ashley, \"Happiness in the Classroom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Practice bouncing back while the stakes are low.",
    "summary": "Resilience education draws on prevention science and positive psychology to build coping skills before serious distress appears.",
    "source": "Jane E. Gillham, Rachel M. Abenavoli, Steven M. Brunwasser, Mark Linkins, Karen J. Reivich, and Martin E. P. Seligman, \"Resilience Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Wisdom is knowing which good thing matters most right now.",
    "summary": "Wisdom education research emphasizes balancing personal, interpersonal, and broader interests over short-term cleverness.",
    "source": "Robert J. Sternberg, \"Teaching for Wisdom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Culture beats slogans: build environments where well-being is normal behavior.",
    "summary": "Positive education case work shows that well-being improves when practices are embedded into school culture, staff training, and daily routines.",
    "source": "Mathew A. White, \"Positive Education at Geelong Grammar School\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Make your work a place where people can do good, not just get through tasks.",
    "summary": "Organizational virtuousness research links compassion, forgiveness, integrity, and meaning with flourishing workplaces.",
    "source": "Kim S. Cameron and Arran Caza, \"Virtuousness as a Source of Happiness in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A job shapes you, so shape the job back.",
    "summary": "Work and well-being research examines how identity, calling, task meaning, and workplace relationships affect happiness.",
    "source": "Brianna Barker Caza and Amy Wrzesniewski, \"How Work Shapes Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Design work so effort has room to become energy instead of depletion.",
    "summary": "Work design research links autonomy, feedback, challenge, support, and active job crafting with employee well-being.",
    "source": "Ben J. Searle and Sharon K. Parker, \"Work Design and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Confidence, hope, optimism, and resilience are not moods; they are working assets.",
    "summary": "Psychological capital research treats these capacities as developable resources that support performance and well-being.",
    "source": "Carolyn M. Youssef and Fred Luthans, \"Managing Psychological Capital in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Notice your best self when it shows up, then build conditions that invite it back.",
    "summary": "Reflected best-self research uses positive identity feedback to help people align work with vitality and value creation.",
    "source": "Laura Morgan Roberts, \"Reflected Best Self Engagement at Work\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "The quality of closeness matters more than the label attached to it.",
    "summary": "Close relationship research links well-being more strongly to relationship quality, support, and responsiveness than status alone.",
    "source": "Shimon Saphire-Bernstein and Shelley E. Taylor, \"Close Relationships and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your attachment patterns affect how much joy you can receive.",
    "summary": "Attachment research studies how security, avoidance, and anxiety shape the experience and consequences of positive emotions.",
    "source": "Mario Mikulincer and Phillip R. Shaver, \"Adult Attachment and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Support works best when it feels reliable, respectful, and real.",
    "summary": "Perceived social support research shows that feeling supported is tied to personality, relational processes, stress buffering, and happiness.",
    "source": "Brian Lakey, \"Perceived Social Support and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Friendship is not a side quest; it is part of the architecture of happiness.",
    "summary": "Friendship research points to intimacy, companionship, support, and conflict management as major contributors to well-being.",
    "source": "Melikşah Demir, Haley Orthel, and Adrian Keith Andelin, \"Friendship and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your mind was not designed only for happiness, so build systems that help it flourish anyway.",
    "summary": "Evolutionary perspectives examine why threat sensitivity, comparison, and desire can interfere with happiness and how people can work around them.",
    "source": "Sarah E. Hill, Danielle J. DelPriore, and Brett Major, \"An Evolutionary Psychological Perspective on Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your baseline is not a prison sentence.",
    "summary": "Set-point debates examine stability in happiness while leaving room for life changes, practices, and social conditions to shift well-being.",
    "source": "Bruce Headey, \"Set-Point Theory May Now Need Replacing\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Keep enough variety in your good life that your brain does not turn it invisible.",
    "summary": "Hedonic adaptation research suggests novelty, appreciation, and varied positive practices can help preserve gains in happiness.",
    "source": "Kennon M. Sheldon, Julia Boehm, and Sonja Lyubomirsky, \"Variety is the Spice of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mental health is more than not being ill; it is having signs of life.",
    "summary": "Complete mental health research distinguishes languishing from flourishing across emotional, psychological, and social well-being.",
    "source": "Corey L. M. Keyes, \"Promotion and Protection of Positive Mental Health\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Growth after pain is not automatic, but meaning can be rebuilt.",
    "summary": "Post-traumatic growth research studies positive psychological change after adversity through meaning, relationships, strength, and possibility.",
    "source": "Stephen Joseph and Kate Hefferon, \"Post-traumatic Growth\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Meaning needs structure: values, goals, story, and daily evidence.",
    "summary": "Lifelong meaning models frame purpose and coherence as an architectural framework that stabilizes existence across time.",
    "source": "Michael F. Steger, Anna Beeby, Samantha Garrett, and Todd B. Kashdan, \"Creating a Stable Architectural Framework of Existence\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Small exercises matter when they are repeated long enough to become a life pattern.",
    "summary": "Self-help intervention research reviews practices such as gratitude, strengths, kindness, and optimism that can improve well-being for some people.",
    "source": "Acacia C. Parks, Stephen M. Schueller, and Arber Tasimi, \"Increasing Happiness in the General Population\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not only remove symptoms; build strengths that make life worth entering again.",
    "summary": "Positive psychotherapy applies strengths, meaning, gratitude, savoring, and positive relationships to clinical well-being.",
    "source": "Tayyab Rashid, \"Positive Psychology in Practice: Positive Psychotherapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose valued action over perfect emotional weather.",
    "summary": "Acceptance and Commitment Therapy links well-being to values, committed action, psychological flexibility, and acceptance of internal experience.",
    "source": "Louise Hayes, \"Happiness in Valued Living: Acceptance and Commitment Therapy as a Model for Change\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Coaching works when insight becomes designed behavior.",
    "summary": "Coaching evidence connects goal-setting, self-regulation, accountability, and reflective practice with improved well-being.",
    "source": "Gordon B. Spence and Anthony M. Grant, \"Coaching and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mindfulness is the skill of meeting the moment before your habits rewrite it.",
    "summary": "Mindfulness research in older adults highlights attention, openness, cognitive flexibility, and well-being across later life.",
    "source": "Laura M. Hsu and Ellen J. Langer, \"Mindfulness and Cultivating Well-being in Older Adults\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Recovery is not only symptom reduction; it is the return of purpose, mastery, and connection.",
    "summary": "Well-being therapy focuses on identifying and extending episodes of well-being while reducing patterns that interrupt them.",
    "source": "Giovanni A. Fava and Chiara Ruini, \"Well-being Therapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "People heal better in systems that expect capability, not permanent deficit.",
    "summary": "Collaborative recovery approaches build positive institutions around hope, strengths, autonomy, and meaningful recovery goals.",
    "source": "Lindsay G. Oades, Trevor P. Crowe, and Frank P. Deane, \"The Collaborative Recovery Model\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Build your day around what expands you, not what merely excites you.",
    "summary": "Positive emotions are treated as resources that widen attention and help people build durable skills, relationships, and resilience.",
    "source": "Anne M. Conway, Michele M. Tugade, Lahnna I. Catalino, and Barbara L. Fredrickson, \"The Broaden-and-Build Theory of Positive Emotions\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose challenges that ask for your full attention without asking you to abandon yourself.",
    "summary": "Flow research points to the happiness value of skill-matched challenge, deep absorption, and activities that feel worthwhile in themselves.",
    "source": "Antonella Delle Fave, \"Past, Present, and Future of Flow\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Name the feeling before you obey it.",
    "summary": "Emotional intelligence research frames well-being as partly shaped by noticing, understanding, and using emotions rather than being driven by them.",
    "source": "Alia J. Crum and Peter Salovey, \"Emotionally Intelligent Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Let belonging do some of the work that discipline cannot.",
    "summary": "Research on religious and communal engagement often highlights social support, meaning, ritual, and shared values as routes to well-being.",
    "source": "David G. Myers, \"Religious Engagement and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not chase positivity so hard that you lose contact with reality.",
    "summary": "Self-regulatory perspectives warn that positive experiences help most when they are flexible, grounded, and integrated with difficult emotions.",
    "source": "Patty Ferssizidis, Todd B. Kashdan, Rachel A. Marquart, and Michael F. Steger, \"Positive Psychological Experiences and Psychopathology\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness works better as a practice than as a trophy.",
    "summary": "Studies on the rewards of happiness suggest happier people often build stronger relationships, work outcomes, and health patterns over time.",
    "source": "Katherine Jacobs Bao and Sonja Lyubomirsky, \"The Rewards of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Pay attention to your life as experienced, not only your life as explained.",
    "summary": "Subjective well-being research separates lived emotion, life satisfaction, and domain satisfaction so people can see where life actually feels good.",
    "source": "William Pavot and Ed Diener, \"Happiness Experienced: The Science of Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A good life needs both pleasure and proof that your days matter.",
    "summary": "Good-life frameworks distinguish pleasant feelings from meaningful functioning, showing why fulfillment requires more than temporary mood boosts.",
    "source": "Ruut Veenhoven, \"Notions of the Good Life\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Track the ordinary signals: mood, connection, energy, meaning, and peace.",
    "summary": "Subjective well-being studies use repeated judgments of life and emotion to understand how people evaluate their lives across contexts.",
    "source": "Felicity F. Miao, Minkyung Koo, and Shigehiro Oishi, \"Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Measure what you want to grow, but do not reduce your life to the measure.",
    "summary": "Well-being measurement research shows that happiness is multi-dimensional and needs careful assessment across feelings, evaluations, and functioning.",
    "source": "Robert A. Cummins, \"Measuring Happiness and Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Live by values that can survive a bad mood.",
    "summary": "Eudaimonic research emphasizes growth, virtue, authenticity, and purpose as foundations for a life that feels deeply worthwhile.",
    "source": "Veronika Huta, \"Eudaimonia\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Autonomy is not doing whatever you want; it is endorsing the life you are actually living.",
    "summary": "Self-determination theory links well-being to autonomy, competence, relatedness, awareness, and goals chosen for their own worth.",
    "source": "Christopher P. Niemiec and Richard M. Ryan, \"Autonomy and its Relation to Full Functioning and Organismic Wellness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A full life lets you feel, evaluate, and function better.",
    "summary": "Functional well-being models combine emotion, life appraisal, and effective functioning instead of treating happiness as one single feeling.",
    "source": "Joar Vittersø, \"Functional Well-being: Happiness as Feelings, Evaluations, and Functioning\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not inherit someone else’s definition of the good life without testing it.",
    "summary": "Historical accounts show that happiness has carried different meanings across eras, making reflection on one’s own definition essential.",
    "source": "Darrin M. McMahon, \"The Pursuit of Happiness in History\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness is not only private comfort; it is also right relationship with people and obligations.",
    "summary": "Early Chinese thought often ties well-being to character, harmony, cultivation, and the quality of one’s role in community.",
    "source": "Philip J. Ivanhoe, \"Happiness in Early Chinese Thought\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Ask whether your happiness is shallow relief or a life you can stand behind.",
    "summary": "Philosophical work on happiness distinguishes mood, life satisfaction, and deeper forms of psychic affirmation or flourishing.",
    "source": "Daniel M. Haybron, \"The Nature and Significance of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Use philosophy to clean up vague desires before you build your life around them.",
    "summary": "Philosophical methods help clarify what counts as happiness, what makes it valuable, and how evidence should be interpreted.",
    "source": "Valerie Tiberius, \"Philosophical Methods in Happiness Research\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Train the mind toward compassion, because self-absorption is a small room.",
    "summary": "Buddhist approaches connect durable happiness with attention, compassion, reduced craving, and freedom from habitual mental grasping.",
    "source": "Matthieu Ricard, \"A Buddhist View of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Treat happiness as something that happens between people, not only inside one person.",
    "summary": "Relational Buddhist psychology frames well-being as emerging through kindness, dialogue, interdependence, and shared meaning.",
    "source": "G. T. Maurits Kwee, \"Relational Buddhism: An Integrative Psychology of Happiness amidst Existential Suffering\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A quiet mind is not empty; it is available.",
    "summary": "Meditation and mindfulness research links present-centered awareness with concentration, empathy, autonomy, and reduced rumination.",
    "source": "Peter Malinowski, \"Flourishing through Meditation and Mindfulness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Give your nervous system places where nothing has to be won.",
    "summary": "Low-arousal routes to happiness highlight silence, contemplation, gentle attention, and calm absorption as undervalued paths to contentment.",
    "source": "Jane Henry, \"Quieting the Mind and Low Arousal Routes to Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Money helps most when it buys stability, freedom, and time, not an endless scoreboard.",
    "summary": "Economic happiness research examines how income, incentives, comparison, unemployment, and choice shape life satisfaction.",
    "source": "Bruno S. Frey and Alois Stutzer, \"Economics and the Study of Individual Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not compare your life with a culture that rewards different things.",
    "summary": "Cross-national well-being research shows that happiness depends on cultural context, values, institutions, and how well-being is defined.",
    "source": "William Tov and Evelyn W. M. Au, \"Comparing Well-being Across Nations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Where you live quietly teaches you what to expect from life.",
    "summary": "Geography of happiness research links place, inequality, opportunity, health, and local conditions to well-being.",
    "source": "Dimitris Ballas and Danny Dorling, \"The Geography of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Buy less identity and build more life.",
    "summary": "Consumer society research warns that material aspiration can shape happiness through status, meaning, identity, and comparison.",
    "source": "Aaron Ahuvia and Elif Izberk-Bilgin, \"Well-being in Consumer Societies\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A fulfilling life should not require a world that burns out to support it.",
    "summary": "Sustainable well-being research connects human flourishing with ecological limits, social fairness, and long-term development.",
    "source": "Sam Thompson, Nic Marks, and Tim Jackson, \"Well-being and Sustainable Development\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Education should train attention, judgment, character, and joy, not only performance.",
    "summary": "Education and well-being research argues that schools shape happiness through purpose, capability, relationships, and values.",
    "source": "John White, \"Education and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Resilience is built before the storm, in small rehearsals of coping.",
    "summary": "School resilience research studies social-emotional skills, optimistic thinking, problem solving, and supportive environments.",
    "source": "Toni Noble and Helen McGrath, \"Well-being and Resilience in Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A classroom can teach people how to notice what is good without denying what is hard.",
    "summary": "Classroom happiness work applies gratitude, strengths, positive emotion, and reflective practice to learning environments.",
    "source": "Jennifer M. Fox Eades, Carmel Proctor, and Martin Ashley, \"Happiness in the Classroom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Practice bouncing back while the stakes are low.",
    "summary": "Resilience education draws on prevention science and positive psychology to build coping skills before serious distress appears.",
    "source": "Jane E. Gillham, Rachel M. Abenavoli, Steven M. Brunwasser, Mark Linkins, Karen J. Reivich, and Martin E. P. Seligman, \"Resilience Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Wisdom is knowing which good thing matters most right now.",
    "summary": "Wisdom education research emphasizes balancing personal, interpersonal, and broader interests over short-term cleverness.",
    "source": "Robert J. Sternberg, \"Teaching for Wisdom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Culture beats slogans: build environments where well-being is normal behavior.",
    "summary": "Positive education case work shows that well-being improves when practices are embedded into school culture, staff training, and daily routines.",
    "source": "Mathew A. White, \"Positive Education at Geelong Grammar School\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Make your work a place where people can do good, not just get through tasks.",
    "summary": "Organizational virtuousness research links compassion, forgiveness, integrity, and meaning with flourishing workplaces.",
    "source": "Kim S. Cameron and Arran Caza, \"Virtuousness as a Source of Happiness in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A job shapes you, so shape the job back.",
    "summary": "Work and well-being research examines how identity, calling, task meaning, and workplace relationships affect happiness.",
    "source": "Brianna Barker Caza and Amy Wrzesniewski, \"How Work Shapes Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Design work so effort has room to become energy instead of depletion.",
    "summary": "Work design research links autonomy, feedback, challenge, support, and active job crafting with employee well-being.",
    "source": "Ben J. Searle and Sharon K. Parker, \"Work Design and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Confidence, hope, optimism, and resilience are not moods; they are working assets.",
    "summary": "Psychological capital research treats these capacities as developable resources that support performance and well-being.",
    "source": "Carolyn M. Youssef and Fred Luthans, \"Managing Psychological Capital in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Notice your best self when it shows up, then build conditions that invite it back.",
    "summary": "Reflected best-self research uses positive identity feedback to help people align work with vitality and value creation.",
    "source": "Laura Morgan Roberts, \"Reflected Best Self Engagement at Work\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "The quality of closeness matters more than the label attached to it.",
    "summary": "Close relationship research links well-being more strongly to relationship quality, support, and responsiveness than status alone.",
    "source": "Shimon Saphire-Bernstein and Shelley E. Taylor, \"Close Relationships and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your attachment patterns affect how much joy you can receive.",
    "summary": "Attachment research studies how security, avoidance, and anxiety shape the experience and consequences of positive emotions.",
    "source": "Mario Mikulincer and Phillip R. Shaver, \"Adult Attachment and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Support works best when it feels reliable, respectful, and real.",
    "summary": "Perceived social support research shows that feeling supported is tied to personality, relational processes, stress buffering, and happiness.",
    "source": "Brian Lakey, \"Perceived Social Support and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Friendship is not a side quest; it is part of the architecture of happiness.",
    "summary": "Friendship research points to intimacy, companionship, support, and conflict management as major contributors to well-being.",
    "source": "Melikşah Demir, Haley Orthel, and Adrian Keith Andelin, \"Friendship and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your mind was not designed only for happiness, so build systems that help it flourish anyway.",
    "summary": "Evolutionary perspectives examine why threat sensitivity, comparison, and desire can interfere with happiness and how people can work around them.",
    "source": "Sarah E. Hill, Danielle J. DelPriore, and Brett Major, \"An Evolutionary Psychological Perspective on Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your baseline is not a prison sentence.",
    "summary": "Set-point debates examine stability in happiness while leaving room for life changes, practices, and social conditions to shift well-being.",
    "source": "Bruce Headey, \"Set-Point Theory May Now Need Replacing\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Keep enough variety in your good life that your brain does not turn it invisible.",
    "summary": "Hedonic adaptation research suggests novelty, appreciation, and varied positive practices can help preserve gains in happiness.",
    "source": "Kennon M. Sheldon, Julia Boehm, and Sonja Lyubomirsky, \"Variety is the Spice of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mental health is more than not being ill; it is having signs of life.",
    "summary": "Complete mental health research distinguishes languishing from flourishing across emotional, psychological, and social well-being.",
    "source": "Corey L. M. Keyes, \"Promotion and Protection of Positive Mental Health\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Growth after pain is not automatic, but meaning can be rebuilt.",
    "summary": "Post-traumatic growth research studies positive psychological change after adversity through meaning, relationships, strength, and possibility.",
    "source": "Stephen Joseph and Kate Hefferon, \"Post-traumatic Growth\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Meaning needs structure: values, goals, story, and daily evidence.",
    "summary": "Lifelong meaning models frame purpose and coherence as an architectural framework that stabilizes existence across time.",
    "source": "Michael F. Steger, Anna Beeby, Samantha Garrett, and Todd B. Kashdan, \"Creating a Stable Architectural Framework of Existence\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Small exercises matter when they are repeated long enough to become a life pattern.",
    "summary": "Self-help intervention research reviews practices such as gratitude, strengths, kindness, and optimism that can improve well-being for some people.",
    "source": "Acacia C. Parks, Stephen M. Schueller, and Arber Tasimi, \"Increasing Happiness in the General Population\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not only remove symptoms; build strengths that make life worth entering again.",
    "summary": "Positive psychotherapy applies strengths, meaning, gratitude, savoring, and positive relationships to clinical well-being.",
    "source": "Tayyab Rashid, \"Positive Psychology in Practice: Positive Psychotherapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose valued action over perfect emotional weather.",
    "summary": "Acceptance and Commitment Therapy links well-being to values, committed action, psychological flexibility, and acceptance of internal experience.",
    "source": "Louise Hayes, \"Happiness in Valued Living: Acceptance and Commitment Therapy as a Model for Change\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Coaching works when insight becomes designed behavior.",
    "summary": "Coaching evidence connects goal-setting, self-regulation, accountability, and reflective practice with improved well-being.",
    "source": "Gordon B. Spence and Anthony M. Grant, \"Coaching and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mindfulness is the skill of meeting the moment before your habits rewrite it.",
    "summary": "Mindfulness research in older adults highlights attention, openness, cognitive flexibility, and well-being across later life.",
    "source": "Laura M. Hsu and Ellen J. Langer, \"Mindfulness and Cultivating Well-being in Older Adults\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Recovery is not only symptom reduction; it is the return of purpose, mastery, and connection.",
    "summary": "Well-being therapy focuses on identifying and extending episodes of well-being while reducing patterns that interrupt them.",
    "source": "Giovanni A. Fava and Chiara Ruini, \"Well-being Therapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "People heal better in systems that expect capability, not permanent deficit.",
    "summary": "Collaborative recovery approaches build positive institutions around hope, strengths, autonomy, and meaningful recovery goals.",
    "source": "Lindsay G. Oades, Trevor P. Crowe, and Frank P. Deane, \"The Collaborative Recovery Model\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Build your day around what expands you, not what merely excites you.",
    "summary": "Positive emotions are treated as resources that widen attention and help people build durable skills, relationships, and resilience.",
    "source": "Anne M. Conway, Michele M. Tugade, Lahnna I. Catalino, and Barbara L. Fredrickson, \"The Broaden-and-Build Theory of Positive Emotions\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose challenges that ask for your full attention without asking you to abandon yourself.",
    "summary": "Flow research points to the happiness value of skill-matched challenge, deep absorption, and activities that feel worthwhile in themselves.",
    "source": "Antonella Delle Fave, \"Past, Present, and Future of Flow\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Name the feeling before you obey it.",
    "summary": "Emotional intelligence research frames well-being as partly shaped by noticing, understanding, and using emotions rather than being driven by them.",
    "source": "Alia J. Crum and Peter Salovey, \"Emotionally Intelligent Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Let belonging do some of the work that discipline cannot.",
    "summary": "Research on religious and communal engagement often highlights social support, meaning, ritual, and shared values as routes to well-being.",
    "source": "David G. Myers, \"Religious Engagement and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not chase positivity so hard that you lose contact with reality.",
    "summary": "Self-regulatory perspectives warn that positive experiences help most when they are flexible, grounded, and integrated with difficult emotions.",
    "source": "Patty Ferssizidis, Todd B. Kashdan, Rachel A. Marquart, and Michael F. Steger, \"Positive Psychological Experiences and Psychopathology\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness works better as a practice than as a trophy.",
    "summary": "Studies on the rewards of happiness suggest happier people often build stronger relationships, work outcomes, and health patterns over time.",
    "source": "Katherine Jacobs Bao and Sonja Lyubomirsky, \"The Rewards of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Pay attention to your life as experienced, not only your life as explained.",
    "summary": "Subjective well-being research separates lived emotion, life satisfaction, and domain satisfaction so people can see where life actually feels good.",
    "source": "William Pavot and Ed Diener, \"Happiness Experienced: The Science of Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A good life needs both pleasure and proof that your days matter.",
    "summary": "Good-life frameworks distinguish pleasant feelings from meaningful functioning, showing why fulfillment requires more than temporary mood boosts.",
    "source": "Ruut Veenhoven, \"Notions of the Good Life\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Track the ordinary signals: mood, connection, energy, meaning, and peace.",
    "summary": "Subjective well-being studies use repeated judgments of life and emotion to understand how people evaluate their lives across contexts.",
    "source": "Felicity F. Miao, Minkyung Koo, and Shigehiro Oishi, \"Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Measure what you want to grow, but do not reduce your life to the measure.",
    "summary": "Well-being measurement research shows that happiness is multi-dimensional and needs careful assessment across feelings, evaluations, and functioning.",
    "source": "Robert A. Cummins, \"Measuring Happiness and Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Live by values that can survive a bad mood.",
    "summary": "Eudaimonic research emphasizes growth, virtue, authenticity, and purpose as foundations for a life that feels deeply worthwhile.",
    "source": "Veronika Huta, \"Eudaimonia\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Autonomy is not doing whatever you want; it is endorsing the life you are actually living.",
    "summary": "Self-determination theory links well-being to autonomy, competence, relatedness, awareness, and goals chosen for their own worth.",
    "source": "Christopher P. Niemiec and Richard M. Ryan, \"Autonomy and its Relation to Full Functioning and Organismic Wellness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A full life lets you feel, evaluate, and function better.",
    "summary": "Functional well-being models combine emotion, life appraisal, and effective functioning instead of treating happiness as one single feeling.",
    "source": "Joar Vittersø, \"Functional Well-being: Happiness as Feelings, Evaluations, and Functioning\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not inherit someone else’s definition of the good life without testing it.",
    "summary": "Historical accounts show that happiness has carried different meanings across eras, making reflection on one’s own definition essential.",
    "source": "Darrin M. McMahon, \"The Pursuit of Happiness in History\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness is not only private comfort; it is also right relationship with people and obligations.",
    "summary": "Early Chinese thought often ties well-being to character, harmony, cultivation, and the quality of one’s role in community.",
    "source": "Philip J. Ivanhoe, \"Happiness in Early Chinese Thought\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Ask whether your happiness is shallow relief or a life you can stand behind.",
    "summary": "Philosophical work on happiness distinguishes mood, life satisfaction, and deeper forms of psychic affirmation or flourishing.",
    "source": "Daniel M. Haybron, \"The Nature and Significance of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Use philosophy to clean up vague desires before you build your life around them.",
    "summary": "Philosophical methods help clarify what counts as happiness, what makes it valuable, and how evidence should be interpreted.",
    "source": "Valerie Tiberius, \"Philosophical Methods in Happiness Research\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Train the mind toward compassion, because self-absorption is a small room.",
    "summary": "Buddhist approaches connect durable happiness with attention, compassion, reduced craving, and freedom from habitual mental grasping.",
    "source": "Matthieu Ricard, \"A Buddhist View of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Treat happiness as something that happens between people, not only inside one person.",
    "summary": "Relational Buddhist psychology frames well-being as emerging through kindness, dialogue, interdependence, and shared meaning.",
    "source": "G. T. Maurits Kwee, \"Relational Buddhism: An Integrative Psychology of Happiness amidst Existential Suffering\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A quiet mind is not empty; it is available.",
    "summary": "Meditation and mindfulness research links present-centered awareness with concentration, empathy, autonomy, and reduced rumination.",
    "source": "Peter Malinowski, \"Flourishing through Meditation and Mindfulness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Give your nervous system places where nothing has to be won.",
    "summary": "Low-arousal routes to happiness highlight silence, contemplation, gentle attention, and calm absorption as undervalued paths to contentment.",
    "source": "Jane Henry, \"Quieting the Mind and Low Arousal Routes to Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Money helps most when it buys stability, freedom, and time, not an endless scoreboard.",
    "summary": "Economic happiness research examines how income, incentives, comparison, unemployment, and choice shape life satisfaction.",
    "source": "Bruno S. Frey and Alois Stutzer, \"Economics and the Study of Individual Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not compare your life with a culture that rewards different things.",
    "summary": "Cross-national well-being research shows that happiness depends on cultural context, values, institutions, and how well-being is defined.",
    "source": "William Tov and Evelyn W. M. Au, \"Comparing Well-being Across Nations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Where you live quietly teaches you what to expect from life.",
    "summary": "Geography of happiness research links place, inequality, opportunity, health, and local conditions to well-being.",
    "source": "Dimitris Ballas and Danny Dorling, \"The Geography of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Buy less identity and build more life.",
    "summary": "Consumer society research warns that material aspiration can shape happiness through status, meaning, identity, and comparison.",
    "source": "Aaron Ahuvia and Elif Izberk-Bilgin, \"Well-being in Consumer Societies\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A fulfilling life should not require a world that burns out to support it.",
    "summary": "Sustainable well-being research connects human flourishing with ecological limits, social fairness, and long-term development.",
    "source": "Sam Thompson, Nic Marks, and Tim Jackson, \"Well-being and Sustainable Development\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Education should train attention, judgment, character, and joy, not only performance.",
    "summary": "Education and well-being research argues that schools shape happiness through purpose, capability, relationships, and values.",
    "source": "John White, \"Education and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Resilience is built before the storm, in small rehearsals of coping.",
    "summary": "School resilience research studies social-emotional skills, optimistic thinking, problem solving, and supportive environments.",
    "source": "Toni Noble and Helen McGrath, \"Well-being and Resilience in Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A classroom can teach people how to notice what is good without denying what is hard.",
    "summary": "Classroom happiness work applies gratitude, strengths, positive emotion, and reflective practice to learning environments.",
    "source": "Jennifer M. Fox Eades, Carmel Proctor, and Martin Ashley, \"Happiness in the Classroom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Practice bouncing back while the stakes are low.",
    "summary": "Resilience education draws on prevention science and positive psychology to build coping skills before serious distress appears.",
    "source": "Jane E. Gillham, Rachel M. Abenavoli, Steven M. Brunwasser, Mark Linkins, Karen J. Reivich, and Martin E. P. Seligman, \"Resilience Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Wisdom is knowing which good thing matters most right now.",
    "summary": "Wisdom education research emphasizes balancing personal, interpersonal, and broader interests over short-term cleverness.",
    "source": "Robert J. Sternberg, \"Teaching for Wisdom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Culture beats slogans: build environments where well-being is normal behavior.",
    "summary": "Positive education case work shows that well-being improves when practices are embedded into school culture, staff training, and daily routines.",
    "source": "Mathew A. White, \"Positive Education at Geelong Grammar School\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Make your work a place where people can do good, not just get through tasks.",
    "summary": "Organizational virtuousness research links compassion, forgiveness, integrity, and meaning with flourishing workplaces.",
    "source": "Kim S. Cameron and Arran Caza, \"Virtuousness as a Source of Happiness in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A job shapes you, so shape the job back.",
    "summary": "Work and well-being research examines how identity, calling, task meaning, and workplace relationships affect happiness.",
    "source": "Brianna Barker Caza and Amy Wrzesniewski, \"How Work Shapes Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Design work so effort has room to become energy instead of depletion.",
    "summary": "Work design research links autonomy, feedback, challenge, support, and active job crafting with employee well-being.",
    "source": "Ben J. Searle and Sharon K. Parker, \"Work Design and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Confidence, hope, optimism, and resilience are not moods; they are working assets.",
    "summary": "Psychological capital research treats these capacities as developable resources that support performance and well-being.",
    "source": "Carolyn M. Youssef and Fred Luthans, \"Managing Psychological Capital in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Notice your best self when it shows up, then build conditions that invite it back.",
    "summary": "Reflected best-self research uses positive identity feedback to help people align work with vitality and value creation.",
    "source": "Laura Morgan Roberts, \"Reflected Best Self Engagement at Work\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "The quality of closeness matters more than the label attached to it.",
    "summary": "Close relationship research links well-being more strongly to relationship quality, support, and responsiveness than status alone.",
    "source": "Shimon Saphire-Bernstein and Shelley E. Taylor, \"Close Relationships and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your attachment patterns affect how much joy you can receive.",
    "summary": "Attachment research studies how security, avoidance, and anxiety shape the experience and consequences of positive emotions.",
    "source": "Mario Mikulincer and Phillip R. Shaver, \"Adult Attachment and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Support works best when it feels reliable, respectful, and real.",
    "summary": "Perceived social support research shows that feeling supported is tied to personality, relational processes, stress buffering, and happiness.",
    "source": "Brian Lakey, \"Perceived Social Support and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Friendship is not a side quest; it is part of the architecture of happiness.",
    "summary": "Friendship research points to intimacy, companionship, support, and conflict management as major contributors to well-being.",
    "source": "Melikşah Demir, Haley Orthel, and Adrian Keith Andelin, \"Friendship and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your mind was not designed only for happiness, so build systems that help it flourish anyway.",
    "summary": "Evolutionary perspectives examine why threat sensitivity, comparison, and desire can interfere with happiness and how people can work around them.",
    "source": "Sarah E. Hill, Danielle J. DelPriore, and Brett Major, \"An Evolutionary Psychological Perspective on Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your baseline is not a prison sentence.",
    "summary": "Set-point debates examine stability in happiness while leaving room for life changes, practices, and social conditions to shift well-being.",
    "source": "Bruce Headey, \"Set-Point Theory May Now Need Replacing\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Keep enough variety in your good life that your brain does not turn it invisible.",
    "summary": "Hedonic adaptation research suggests novelty, appreciation, and varied positive practices can help preserve gains in happiness.",
    "source": "Kennon M. Sheldon, Julia Boehm, and Sonja Lyubomirsky, \"Variety is the Spice of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mental health is more than not being ill; it is having signs of life.",
    "summary": "Complete mental health research distinguishes languishing from flourishing across emotional, psychological, and social well-being.",
    "source": "Corey L. M. Keyes, \"Promotion and Protection of Positive Mental Health\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Growth after pain is not automatic, but meaning can be rebuilt.",
    "summary": "Post-traumatic growth research studies positive psychological change after adversity through meaning, relationships, strength, and possibility.",
    "source": "Stephen Joseph and Kate Hefferon, \"Post-traumatic Growth\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Meaning needs structure: values, goals, story, and daily evidence.",
    "summary": "Lifelong meaning models frame purpose and coherence as an architectural framework that stabilizes existence across time.",
    "source": "Michael F. Steger, Anna Beeby, Samantha Garrett, and Todd B. Kashdan, \"Creating a Stable Architectural Framework of Existence\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Small exercises matter when they are repeated long enough to become a life pattern.",
    "summary": "Self-help intervention research reviews practices such as gratitude, strengths, kindness, and optimism that can improve well-being for some people.",
    "source": "Acacia C. Parks, Stephen M. Schueller, and Arber Tasimi, \"Increasing Happiness in the General Population\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not only remove symptoms; build strengths that make life worth entering again.",
    "summary": "Positive psychotherapy applies strengths, meaning, gratitude, savoring, and positive relationships to clinical well-being.",
    "source": "Tayyab Rashid, \"Positive Psychology in Practice: Positive Psychotherapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose valued action over perfect emotional weather.",
    "summary": "Acceptance and Commitment Therapy links well-being to values, committed action, psychological flexibility, and acceptance of internal experience.",
    "source": "Louise Hayes, \"Happiness in Valued Living: Acceptance and Commitment Therapy as a Model for Change\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Coaching works when insight becomes designed behavior.",
    "summary": "Coaching evidence connects goal-setting, self-regulation, accountability, and reflective practice with improved well-being.",
    "source": "Gordon B. Spence and Anthony M. Grant, \"Coaching and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mindfulness is the skill of meeting the moment before your habits rewrite it.",
    "summary": "Mindfulness research in older adults highlights attention, openness, cognitive flexibility, and well-being across later life.",
    "source": "Laura M. Hsu and Ellen J. Langer, \"Mindfulness and Cultivating Well-being in Older Adults\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Recovery is not only symptom reduction; it is the return of purpose, mastery, and connection.",
    "summary": "Well-being therapy focuses on identifying and extending episodes of well-being while reducing patterns that interrupt them.",
    "source": "Giovanni A. Fava and Chiara Ruini, \"Well-being Therapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "People heal better in systems that expect capability, not permanent deficit.",
    "summary": "Collaborative recovery approaches build positive institutions around hope, strengths, autonomy, and meaningful recovery goals.",
    "source": "Lindsay G. Oades, Trevor P. Crowe, and Frank P. Deane, \"The Collaborative Recovery Model\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Build your day around what expands you, not what merely excites you.",
    "summary": "Positive emotions are treated as resources that widen attention and help people build durable skills, relationships, and resilience.",
    "source": "Anne M. Conway, Michele M. Tugade, Lahnna I. Catalino, and Barbara L. Fredrickson, \"The Broaden-and-Build Theory of Positive Emotions\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose challenges that ask for your full attention without asking you to abandon yourself.",
    "summary": "Flow research points to the happiness value of skill-matched challenge, deep absorption, and activities that feel worthwhile in themselves.",
    "source": "Antonella Delle Fave, \"Past, Present, and Future of Flow\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Name the feeling before you obey it.",
    "summary": "Emotional intelligence research frames well-being as partly shaped by noticing, understanding, and using emotions rather than being driven by them.",
    "source": "Alia J. Crum and Peter Salovey, \"Emotionally Intelligent Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Let belonging do some of the work that discipline cannot.",
    "summary": "Research on religious and communal engagement often highlights social support, meaning, ritual, and shared values as routes to well-being.",
    "source": "David G. Myers, \"Religious Engagement and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not chase positivity so hard that you lose contact with reality.",
    "summary": "Self-regulatory perspectives warn that positive experiences help most when they are flexible, grounded, and integrated with difficult emotions.",
    "source": "Patty Ferssizidis, Todd B. Kashdan, Rachel A. Marquart, and Michael F. Steger, \"Positive Psychological Experiences and Psychopathology\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness works better as a practice than as a trophy.",
    "summary": "Studies on the rewards of happiness suggest happier people often build stronger relationships, work outcomes, and health patterns over time.",
    "source": "Katherine Jacobs Bao and Sonja Lyubomirsky, \"The Rewards of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Pay attention to your life as experienced, not only your life as explained.",
    "summary": "Subjective well-being research separates lived emotion, life satisfaction, and domain satisfaction so people can see where life actually feels good.",
    "source": "William Pavot and Ed Diener, \"Happiness Experienced: The Science of Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A good life needs both pleasure and proof that your days matter.",
    "summary": "Good-life frameworks distinguish pleasant feelings from meaningful functioning, showing why fulfillment requires more than temporary mood boosts.",
    "source": "Ruut Veenhoven, \"Notions of the Good Life\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Track the ordinary signals: mood, connection, energy, meaning, and peace.",
    "summary": "Subjective well-being studies use repeated judgments of life and emotion to understand how people evaluate their lives across contexts.",
    "source": "Felicity F. Miao, Minkyung Koo, and Shigehiro Oishi, \"Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Measure what you want to grow, but do not reduce your life to the measure.",
    "summary": "Well-being measurement research shows that happiness is multi-dimensional and needs careful assessment across feelings, evaluations, and functioning.",
    "source": "Robert A. Cummins, \"Measuring Happiness and Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Live by values that can survive a bad mood.",
    "summary": "Eudaimonic research emphasizes growth, virtue, authenticity, and purpose as foundations for a life that feels deeply worthwhile.",
    "source": "Veronika Huta, \"Eudaimonia\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Autonomy is not doing whatever you want; it is endorsing the life you are actually living.",
    "summary": "Self-determination theory links well-being to autonomy, competence, relatedness, awareness, and goals chosen for their own worth.",
    "source": "Christopher P. Niemiec and Richard M. Ryan, \"Autonomy and its Relation to Full Functioning and Organismic Wellness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A full life lets you feel, evaluate, and function better.",
    "summary": "Functional well-being models combine emotion, life appraisal, and effective functioning instead of treating happiness as one single feeling.",
    "source": "Joar Vittersø, \"Functional Well-being: Happiness as Feelings, Evaluations, and Functioning\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not inherit someone else’s definition of the good life without testing it.",
    "summary": "Historical accounts show that happiness has carried different meanings across eras, making reflection on one’s own definition essential.",
    "source": "Darrin M. McMahon, \"The Pursuit of Happiness in History\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness is not only private comfort; it is also right relationship with people and obligations.",
    "summary": "Early Chinese thought often ties well-being to character, harmony, cultivation, and the quality of one’s role in community.",
    "source": "Philip J. Ivanhoe, \"Happiness in Early Chinese Thought\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Ask whether your happiness is shallow relief or a life you can stand behind.",
    "summary": "Philosophical work on happiness distinguishes mood, life satisfaction, and deeper forms of psychic affirmation or flourishing.",
    "source": "Daniel M. Haybron, \"The Nature and Significance of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Use philosophy to clean up vague desires before you build your life around them.",
    "summary": "Philosophical methods help clarify what counts as happiness, what makes it valuable, and how evidence should be interpreted.",
    "source": "Valerie Tiberius, \"Philosophical Methods in Happiness Research\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Train the mind toward compassion, because self-absorption is a small room.",
    "summary": "Buddhist approaches connect durable happiness with attention, compassion, reduced craving, and freedom from habitual mental grasping.",
    "source": "Matthieu Ricard, \"A Buddhist View of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Treat happiness as something that happens between people, not only inside one person.",
    "summary": "Relational Buddhist psychology frames well-being as emerging through kindness, dialogue, interdependence, and shared meaning.",
    "source": "G. T. Maurits Kwee, \"Relational Buddhism: An Integrative Psychology of Happiness amidst Existential Suffering\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A quiet mind is not empty; it is available.",
    "summary": "Meditation and mindfulness research links present-centered awareness with concentration, empathy, autonomy, and reduced rumination.",
    "source": "Peter Malinowski, \"Flourishing through Meditation and Mindfulness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Give your nervous system places where nothing has to be won.",
    "summary": "Low-arousal routes to happiness highlight silence, contemplation, gentle attention, and calm absorption as undervalued paths to contentment.",
    "source": "Jane Henry, \"Quieting the Mind and Low Arousal Routes to Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Money helps most when it buys stability, freedom, and time, not an endless scoreboard.",
    "summary": "Economic happiness research examines how income, incentives, comparison, unemployment, and choice shape life satisfaction.",
    "source": "Bruno S. Frey and Alois Stutzer, \"Economics and the Study of Individual Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not compare your life with a culture that rewards different things.",
    "summary": "Cross-national well-being research shows that happiness depends on cultural context, values, institutions, and how well-being is defined.",
    "source": "William Tov and Evelyn W. M. Au, \"Comparing Well-being Across Nations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Where you live quietly teaches you what to expect from life.",
    "summary": "Geography of happiness research links place, inequality, opportunity, health, and local conditions to well-being.",
    "source": "Dimitris Ballas and Danny Dorling, \"The Geography of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Buy less identity and build more life.",
    "summary": "Consumer society research warns that material aspiration can shape happiness through status, meaning, identity, and comparison.",
    "source": "Aaron Ahuvia and Elif Izberk-Bilgin, \"Well-being in Consumer Societies\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A fulfilling life should not require a world that burns out to support it.",
    "summary": "Sustainable well-being research connects human flourishing with ecological limits, social fairness, and long-term development.",
    "source": "Sam Thompson, Nic Marks, and Tim Jackson, \"Well-being and Sustainable Development\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Education should train attention, judgment, character, and joy, not only performance.",
    "summary": "Education and well-being research argues that schools shape happiness through purpose, capability, relationships, and values.",
    "source": "John White, \"Education and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Resilience is built before the storm, in small rehearsals of coping.",
    "summary": "School resilience research studies social-emotional skills, optimistic thinking, problem solving, and supportive environments.",
    "source": "Toni Noble and Helen McGrath, \"Well-being and Resilience in Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A classroom can teach people how to notice what is good without denying what is hard.",
    "summary": "Classroom happiness work applies gratitude, strengths, positive emotion, and reflective practice to learning environments.",
    "source": "Jennifer M. Fox Eades, Carmel Proctor, and Martin Ashley, \"Happiness in the Classroom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Practice bouncing back while the stakes are low.",
    "summary": "Resilience education draws on prevention science and positive psychology to build coping skills before serious distress appears.",
    "source": "Jane E. Gillham, Rachel M. Abenavoli, Steven M. Brunwasser, Mark Linkins, Karen J. Reivich, and Martin E. P. Seligman, \"Resilience Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Wisdom is knowing which good thing matters most right now.",
    "summary": "Wisdom education research emphasizes balancing personal, interpersonal, and broader interests over short-term cleverness.",
    "source": "Robert J. Sternberg, \"Teaching for Wisdom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Culture beats slogans: build environments where well-being is normal behavior.",
    "summary": "Positive education case work shows that well-being improves when practices are embedded into school culture, staff training, and daily routines.",
    "source": "Mathew A. White, \"Positive Education at Geelong Grammar School\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Make your work a place where people can do good, not just get through tasks.",
    "summary": "Organizational virtuousness research links compassion, forgiveness, integrity, and meaning with flourishing workplaces.",
    "source": "Kim S. Cameron and Arran Caza, \"Virtuousness as a Source of Happiness in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A job shapes you, so shape the job back.",
    "summary": "Work and well-being research examines how identity, calling, task meaning, and workplace relationships affect happiness.",
    "source": "Brianna Barker Caza and Amy Wrzesniewski, \"How Work Shapes Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Design work so effort has room to become energy instead of depletion.",
    "summary": "Work design research links autonomy, feedback, challenge, support, and active job crafting with employee well-being.",
    "source": "Ben J. Searle and Sharon K. Parker, \"Work Design and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Confidence, hope, optimism, and resilience are not moods; they are working assets.",
    "summary": "Psychological capital research treats these capacities as developable resources that support performance and well-being.",
    "source": "Carolyn M. Youssef and Fred Luthans, \"Managing Psychological Capital in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Notice your best self when it shows up, then build conditions that invite it back.",
    "summary": "Reflected best-self research uses positive identity feedback to help people align work with vitality and value creation.",
    "source": "Laura Morgan Roberts, \"Reflected Best Self Engagement at Work\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "The quality of closeness matters more than the label attached to it.",
    "summary": "Close relationship research links well-being more strongly to relationship quality, support, and responsiveness than status alone.",
    "source": "Shimon Saphire-Bernstein and Shelley E. Taylor, \"Close Relationships and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your attachment patterns affect how much joy you can receive.",
    "summary": "Attachment research studies how security, avoidance, and anxiety shape the experience and consequences of positive emotions.",
    "source": "Mario Mikulincer and Phillip R. Shaver, \"Adult Attachment and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Support works best when it feels reliable, respectful, and real.",
    "summary": "Perceived social support research shows that feeling supported is tied to personality, relational processes, stress buffering, and happiness.",
    "source": "Brian Lakey, \"Perceived Social Support and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Friendship is not a side quest; it is part of the architecture of happiness.",
    "summary": "Friendship research points to intimacy, companionship, support, and conflict management as major contributors to well-being.",
    "source": "Melikşah Demir, Haley Orthel, and Adrian Keith Andelin, \"Friendship and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your mind was not designed only for happiness, so build systems that help it flourish anyway.",
    "summary": "Evolutionary perspectives examine why threat sensitivity, comparison, and desire can interfere with happiness and how people can work around them.",
    "source": "Sarah E. Hill, Danielle J. DelPriore, and Brett Major, \"An Evolutionary Psychological Perspective on Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your baseline is not a prison sentence.",
    "summary": "Set-point debates examine stability in happiness while leaving room for life changes, practices, and social conditions to shift well-being.",
    "source": "Bruce Headey, \"Set-Point Theory May Now Need Replacing\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Keep enough variety in your good life that your brain does not turn it invisible.",
    "summary": "Hedonic adaptation research suggests novelty, appreciation, and varied positive practices can help preserve gains in happiness.",
    "source": "Kennon M. Sheldon, Julia Boehm, and Sonja Lyubomirsky, \"Variety is the Spice of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mental health is more than not being ill; it is having signs of life.",
    "summary": "Complete mental health research distinguishes languishing from flourishing across emotional, psychological, and social well-being.",
    "source": "Corey L. M. Keyes, \"Promotion and Protection of Positive Mental Health\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Growth after pain is not automatic, but meaning can be rebuilt.",
    "summary": "Post-traumatic growth research studies positive psychological change after adversity through meaning, relationships, strength, and possibility.",
    "source": "Stephen Joseph and Kate Hefferon, \"Post-traumatic Growth\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Meaning needs structure: values, goals, story, and daily evidence.",
    "summary": "Lifelong meaning models frame purpose and coherence as an architectural framework that stabilizes existence across time.",
    "source": "Michael F. Steger, Anna Beeby, Samantha Garrett, and Todd B. Kashdan, \"Creating a Stable Architectural Framework of Existence\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Small exercises matter when they are repeated long enough to become a life pattern.",
    "summary": "Self-help intervention research reviews practices such as gratitude, strengths, kindness, and optimism that can improve well-being for some people.",
    "source": "Acacia C. Parks, Stephen M. Schueller, and Arber Tasimi, \"Increasing Happiness in the General Population\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not only remove symptoms; build strengths that make life worth entering again.",
    "summary": "Positive psychotherapy applies strengths, meaning, gratitude, savoring, and positive relationships to clinical well-being.",
    "source": "Tayyab Rashid, \"Positive Psychology in Practice: Positive Psychotherapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose valued action over perfect emotional weather.",
    "summary": "Acceptance and Commitment Therapy links well-being to values, committed action, psychological flexibility, and acceptance of internal experience.",
    "source": "Louise Hayes, \"Happiness in Valued Living: Acceptance and Commitment Therapy as a Model for Change\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Coaching works when insight becomes designed behavior.",
    "summary": "Coaching evidence connects goal-setting, self-regulation, accountability, and reflective practice with improved well-being.",
    "source": "Gordon B. Spence and Anthony M. Grant, \"Coaching and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mindfulness is the skill of meeting the moment before your habits rewrite it.",
    "summary": "Mindfulness research in older adults highlights attention, openness, cognitive flexibility, and well-being across later life.",
    "source": "Laura M. Hsu and Ellen J. Langer, \"Mindfulness and Cultivating Well-being in Older Adults\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Recovery is not only symptom reduction; it is the return of purpose, mastery, and connection.",
    "summary": "Well-being therapy focuses on identifying and extending episodes of well-being while reducing patterns that interrupt them.",
    "source": "Giovanni A. Fava and Chiara Ruini, \"Well-being Therapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "People heal better in systems that expect capability, not permanent deficit.",
    "summary": "Collaborative recovery approaches build positive institutions around hope, strengths, autonomy, and meaningful recovery goals.",
    "source": "Lindsay G. Oades, Trevor P. Crowe, and Frank P. Deane, \"The Collaborative Recovery Model\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Build your day around what expands you, not what merely excites you.",
    "summary": "Positive emotions are treated as resources that widen attention and help people build durable skills, relationships, and resilience.",
    "source": "Anne M. Conway, Michele M. Tugade, Lahnna I. Catalino, and Barbara L. Fredrickson, \"The Broaden-and-Build Theory of Positive Emotions\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose challenges that ask for your full attention without asking you to abandon yourself.",
    "summary": "Flow research points to the happiness value of skill-matched challenge, deep absorption, and activities that feel worthwhile in themselves.",
    "source": "Antonella Delle Fave, \"Past, Present, and Future of Flow\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Name the feeling before you obey it.",
    "summary": "Emotional intelligence research frames well-being as partly shaped by noticing, understanding, and using emotions rather than being driven by them.",
    "source": "Alia J. Crum and Peter Salovey, \"Emotionally Intelligent Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Let belonging do some of the work that discipline cannot.",
    "summary": "Research on religious and communal engagement often highlights social support, meaning, ritual, and shared values as routes to well-being.",
    "source": "David G. Myers, \"Religious Engagement and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not chase positivity so hard that you lose contact with reality.",
    "summary": "Self-regulatory perspectives warn that positive experiences help most when they are flexible, grounded, and integrated with difficult emotions.",
    "source": "Patty Ferssizidis, Todd B. Kashdan, Rachel A. Marquart, and Michael F. Steger, \"Positive Psychological Experiences and Psychopathology\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness works better as a practice than as a trophy.",
    "summary": "Studies on the rewards of happiness suggest happier people often build stronger relationships, work outcomes, and health patterns over time.",
    "source": "Katherine Jacobs Bao and Sonja Lyubomirsky, \"The Rewards of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Pay attention to your life as experienced, not only your life as explained.",
    "summary": "Subjective well-being research separates lived emotion, life satisfaction, and domain satisfaction so people can see where life actually feels good.",
    "source": "William Pavot and Ed Diener, \"Happiness Experienced: The Science of Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A good life needs both pleasure and proof that your days matter.",
    "summary": "Good-life frameworks distinguish pleasant feelings from meaningful functioning, showing why fulfillment requires more than temporary mood boosts.",
    "source": "Ruut Veenhoven, \"Notions of the Good Life\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Track the ordinary signals: mood, connection, energy, meaning, and peace.",
    "summary": "Subjective well-being studies use repeated judgments of life and emotion to understand how people evaluate their lives across contexts.",
    "source": "Felicity F. Miao, Minkyung Koo, and Shigehiro Oishi, \"Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Measure what you want to grow, but do not reduce your life to the measure.",
    "summary": "Well-being measurement research shows that happiness is multi-dimensional and needs careful assessment across feelings, evaluations, and functioning.",
    "source": "Robert A. Cummins, \"Measuring Happiness and Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Live by values that can survive a bad mood.",
    "summary": "Eudaimonic research emphasizes growth, virtue, authenticity, and purpose as foundations for a life that feels deeply worthwhile.",
    "source": "Veronika Huta, \"Eudaimonia\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Autonomy is not doing whatever you want; it is endorsing the life you are actually living.",
    "summary": "Self-determination theory links well-being to autonomy, competence, relatedness, awareness, and goals chosen for their own worth.",
    "source": "Christopher P. Niemiec and Richard M. Ryan, \"Autonomy and its Relation to Full Functioning and Organismic Wellness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A full life lets you feel, evaluate, and function better.",
    "summary": "Functional well-being models combine emotion, life appraisal, and effective functioning instead of treating happiness as one single feeling.",
    "source": "Joar Vittersø, \"Functional Well-being: Happiness as Feelings, Evaluations, and Functioning\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not inherit someone else’s definition of the good life without testing it.",
    "summary": "Historical accounts show that happiness has carried different meanings across eras, making reflection on one’s own definition essential.",
    "source": "Darrin M. McMahon, \"The Pursuit of Happiness in History\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness is not only private comfort; it is also right relationship with people and obligations.",
    "summary": "Early Chinese thought often ties well-being to character, harmony, cultivation, and the quality of one’s role in community.",
    "source": "Philip J. Ivanhoe, \"Happiness in Early Chinese Thought\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Ask whether your happiness is shallow relief or a life you can stand behind.",
    "summary": "Philosophical work on happiness distinguishes mood, life satisfaction, and deeper forms of psychic affirmation or flourishing.",
    "source": "Daniel M. Haybron, \"The Nature and Significance of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Use philosophy to clean up vague desires before you build your life around them.",
    "summary": "Philosophical methods help clarify what counts as happiness, what makes it valuable, and how evidence should be interpreted.",
    "source": "Valerie Tiberius, \"Philosophical Methods in Happiness Research\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Train the mind toward compassion, because self-absorption is a small room.",
    "summary": "Buddhist approaches connect durable happiness with attention, compassion, reduced craving, and freedom from habitual mental grasping.",
    "source": "Matthieu Ricard, \"A Buddhist View of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Treat happiness as something that happens between people, not only inside one person.",
    "summary": "Relational Buddhist psychology frames well-being as emerging through kindness, dialogue, interdependence, and shared meaning.",
    "source": "G. T. Maurits Kwee, \"Relational Buddhism: An Integrative Psychology of Happiness amidst Existential Suffering\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A quiet mind is not empty; it is available.",
    "summary": "Meditation and mindfulness research links present-centered awareness with concentration, empathy, autonomy, and reduced rumination.",
    "source": "Peter Malinowski, \"Flourishing through Meditation and Mindfulness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Give your nervous system places where nothing has to be won.",
    "summary": "Low-arousal routes to happiness highlight silence, contemplation, gentle attention, and calm absorption as undervalued paths to contentment.",
    "source": "Jane Henry, \"Quieting the Mind and Low Arousal Routes to Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Money helps most when it buys stability, freedom, and time, not an endless scoreboard.",
    "summary": "Economic happiness research examines how income, incentives, comparison, unemployment, and choice shape life satisfaction.",
    "source": "Bruno S. Frey and Alois Stutzer, \"Economics and the Study of Individual Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not compare your life with a culture that rewards different things.",
    "summary": "Cross-national well-being research shows that happiness depends on cultural context, values, institutions, and how well-being is defined.",
    "source": "William Tov and Evelyn W. M. Au, \"Comparing Well-being Across Nations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Where you live quietly teaches you what to expect from life.",
    "summary": "Geography of happiness research links place, inequality, opportunity, health, and local conditions to well-being.",
    "source": "Dimitris Ballas and Danny Dorling, \"The Geography of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Buy less identity and build more life.",
    "summary": "Consumer society research warns that material aspiration can shape happiness through status, meaning, identity, and comparison.",
    "source": "Aaron Ahuvia and Elif Izberk-Bilgin, \"Well-being in Consumer Societies\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A fulfilling life should not require a world that burns out to support it.",
    "summary": "Sustainable well-being research connects human flourishing with ecological limits, social fairness, and long-term development.",
    "source": "Sam Thompson, Nic Marks, and Tim Jackson, \"Well-being and Sustainable Development\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Education should train attention, judgment, character, and joy, not only performance.",
    "summary": "Education and well-being research argues that schools shape happiness through purpose, capability, relationships, and values.",
    "source": "John White, \"Education and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Resilience is built before the storm, in small rehearsals of coping.",
    "summary": "School resilience research studies social-emotional skills, optimistic thinking, problem solving, and supportive environments.",
    "source": "Toni Noble and Helen McGrath, \"Well-being and Resilience in Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A classroom can teach people how to notice what is good without denying what is hard.",
    "summary": "Classroom happiness work applies gratitude, strengths, positive emotion, and reflective practice to learning environments.",
    "source": "Jennifer M. Fox Eades, Carmel Proctor, and Martin Ashley, \"Happiness in the Classroom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Practice bouncing back while the stakes are low.",
    "summary": "Resilience education draws on prevention science and positive psychology to build coping skills before serious distress appears.",
    "source": "Jane E. Gillham, Rachel M. Abenavoli, Steven M. Brunwasser, Mark Linkins, Karen J. Reivich, and Martin E. P. Seligman, \"Resilience Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Wisdom is knowing which good thing matters most right now.",
    "summary": "Wisdom education research emphasizes balancing personal, interpersonal, and broader interests over short-term cleverness.",
    "source": "Robert J. Sternberg, \"Teaching for Wisdom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Culture beats slogans: build environments where well-being is normal behavior.",
    "summary": "Positive education case work shows that well-being improves when practices are embedded into school culture, staff training, and daily routines.",
    "source": "Mathew A. White, \"Positive Education at Geelong Grammar School\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Make your work a place where people can do good, not just get through tasks.",
    "summary": "Organizational virtuousness research links compassion, forgiveness, integrity, and meaning with flourishing workplaces.",
    "source": "Kim S. Cameron and Arran Caza, \"Virtuousness as a Source of Happiness in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A job shapes you, so shape the job back.",
    "summary": "Work and well-being research examines how identity, calling, task meaning, and workplace relationships affect happiness.",
    "source": "Brianna Barker Caza and Amy Wrzesniewski, \"How Work Shapes Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Design work so effort has room to become energy instead of depletion.",
    "summary": "Work design research links autonomy, feedback, challenge, support, and active job crafting with employee well-being.",
    "source": "Ben J. Searle and Sharon K. Parker, \"Work Design and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Confidence, hope, optimism, and resilience are not moods; they are working assets.",
    "summary": "Psychological capital research treats these capacities as developable resources that support performance and well-being.",
    "source": "Carolyn M. Youssef and Fred Luthans, \"Managing Psychological Capital in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Notice your best self when it shows up, then build conditions that invite it back.",
    "summary": "Reflected best-self research uses positive identity feedback to help people align work with vitality and value creation.",
    "source": "Laura Morgan Roberts, \"Reflected Best Self Engagement at Work\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "The quality of closeness matters more than the label attached to it.",
    "summary": "Close relationship research links well-being more strongly to relationship quality, support, and responsiveness than status alone.",
    "source": "Shimon Saphire-Bernstein and Shelley E. Taylor, \"Close Relationships and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your attachment patterns affect how much joy you can receive.",
    "summary": "Attachment research studies how security, avoidance, and anxiety shape the experience and consequences of positive emotions.",
    "source": "Mario Mikulincer and Phillip R. Shaver, \"Adult Attachment and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Support works best when it feels reliable, respectful, and real.",
    "summary": "Perceived social support research shows that feeling supported is tied to personality, relational processes, stress buffering, and happiness.",
    "source": "Brian Lakey, \"Perceived Social Support and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Friendship is not a side quest; it is part of the architecture of happiness.",
    "summary": "Friendship research points to intimacy, companionship, support, and conflict management as major contributors to well-being.",
    "source": "Melikşah Demir, Haley Orthel, and Adrian Keith Andelin, \"Friendship and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your mind was not designed only for happiness, so build systems that help it flourish anyway.",
    "summary": "Evolutionary perspectives examine why threat sensitivity, comparison, and desire can interfere with happiness and how people can work around them.",
    "source": "Sarah E. Hill, Danielle J. DelPriore, and Brett Major, \"An Evolutionary Psychological Perspective on Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your baseline is not a prison sentence.",
    "summary": "Set-point debates examine stability in happiness while leaving room for life changes, practices, and social conditions to shift well-being.",
    "source": "Bruce Headey, \"Set-Point Theory May Now Need Replacing\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Keep enough variety in your good life that your brain does not turn it invisible.",
    "summary": "Hedonic adaptation research suggests novelty, appreciation, and varied positive practices can help preserve gains in happiness.",
    "source": "Kennon M. Sheldon, Julia Boehm, and Sonja Lyubomirsky, \"Variety is the Spice of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mental health is more than not being ill; it is having signs of life.",
    "summary": "Complete mental health research distinguishes languishing from flourishing across emotional, psychological, and social well-being.",
    "source": "Corey L. M. Keyes, \"Promotion and Protection of Positive Mental Health\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Growth after pain is not automatic, but meaning can be rebuilt.",
    "summary": "Post-traumatic growth research studies positive psychological change after adversity through meaning, relationships, strength, and possibility.",
    "source": "Stephen Joseph and Kate Hefferon, \"Post-traumatic Growth\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Meaning needs structure: values, goals, story, and daily evidence.",
    "summary": "Lifelong meaning models frame purpose and coherence as an architectural framework that stabilizes existence across time.",
    "source": "Michael F. Steger, Anna Beeby, Samantha Garrett, and Todd B. Kashdan, \"Creating a Stable Architectural Framework of Existence\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Small exercises matter when they are repeated long enough to become a life pattern.",
    "summary": "Self-help intervention research reviews practices such as gratitude, strengths, kindness, and optimism that can improve well-being for some people.",
    "source": "Acacia C. Parks, Stephen M. Schueller, and Arber Tasimi, \"Increasing Happiness in the General Population\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not only remove symptoms; build strengths that make life worth entering again.",
    "summary": "Positive psychotherapy applies strengths, meaning, gratitude, savoring, and positive relationships to clinical well-being.",
    "source": "Tayyab Rashid, \"Positive Psychology in Practice: Positive Psychotherapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose valued action over perfect emotional weather.",
    "summary": "Acceptance and Commitment Therapy links well-being to values, committed action, psychological flexibility, and acceptance of internal experience.",
    "source": "Louise Hayes, \"Happiness in Valued Living: Acceptance and Commitment Therapy as a Model for Change\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Coaching works when insight becomes designed behavior.",
    "summary": "Coaching evidence connects goal-setting, self-regulation, accountability, and reflective practice with improved well-being.",
    "source": "Gordon B. Spence and Anthony M. Grant, \"Coaching and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Mindfulness is the skill of meeting the moment before your habits rewrite it.",
    "summary": "Mindfulness research in older adults highlights attention, openness, cognitive flexibility, and well-being across later life.",
    "source": "Laura M. Hsu and Ellen J. Langer, \"Mindfulness and Cultivating Well-being in Older Adults\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Recovery is not only symptom reduction; it is the return of purpose, mastery, and connection.",
    "summary": "Well-being therapy focuses on identifying and extending episodes of well-being while reducing patterns that interrupt them.",
    "source": "Giovanni A. Fava and Chiara Ruini, \"Well-being Therapy\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "People heal better in systems that expect capability, not permanent deficit.",
    "summary": "Collaborative recovery approaches build positive institutions around hope, strengths, autonomy, and meaningful recovery goals.",
    "source": "Lindsay G. Oades, Trevor P. Crowe, and Frank P. Deane, \"The Collaborative Recovery Model\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Build your day around what expands you, not what merely excites you.",
    "summary": "Positive emotions are treated as resources that widen attention and help people build durable skills, relationships, and resilience.",
    "source": "Anne M. Conway, Michele M. Tugade, Lahnna I. Catalino, and Barbara L. Fredrickson, \"The Broaden-and-Build Theory of Positive Emotions\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Choose challenges that ask for your full attention without asking you to abandon yourself.",
    "summary": "Flow research points to the happiness value of skill-matched challenge, deep absorption, and activities that feel worthwhile in themselves.",
    "source": "Antonella Delle Fave, \"Past, Present, and Future of Flow\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Name the feeling before you obey it.",
    "summary": "Emotional intelligence research frames well-being as partly shaped by noticing, understanding, and using emotions rather than being driven by them.",
    "source": "Alia J. Crum and Peter Salovey, \"Emotionally Intelligent Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Let belonging do some of the work that discipline cannot.",
    "summary": "Research on religious and communal engagement often highlights social support, meaning, ritual, and shared values as routes to well-being.",
    "source": "David G. Myers, \"Religious Engagement and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not chase positivity so hard that you lose contact with reality.",
    "summary": "Self-regulatory perspectives warn that positive experiences help most when they are flexible, grounded, and integrated with difficult emotions.",
    "source": "Patty Ferssizidis, Todd B. Kashdan, Rachel A. Marquart, and Michael F. Steger, \"Positive Psychological Experiences and Psychopathology\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness works better as a practice than as a trophy.",
    "summary": "Studies on the rewards of happiness suggest happier people often build stronger relationships, work outcomes, and health patterns over time.",
    "source": "Katherine Jacobs Bao and Sonja Lyubomirsky, \"The Rewards of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Pay attention to your life as experienced, not only your life as explained.",
    "summary": "Subjective well-being research separates lived emotion, life satisfaction, and domain satisfaction so people can see where life actually feels good.",
    "source": "William Pavot and Ed Diener, \"Happiness Experienced: The Science of Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A good life needs both pleasure and proof that your days matter.",
    "summary": "Good-life frameworks distinguish pleasant feelings from meaningful functioning, showing why fulfillment requires more than temporary mood boosts.",
    "source": "Ruut Veenhoven, \"Notions of the Good Life\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Track the ordinary signals: mood, connection, energy, meaning, and peace.",
    "summary": "Subjective well-being studies use repeated judgments of life and emotion to understand how people evaluate their lives across contexts.",
    "source": "Felicity F. Miao, Minkyung Koo, and Shigehiro Oishi, \"Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Measure what you want to grow, but do not reduce your life to the measure.",
    "summary": "Well-being measurement research shows that happiness is multi-dimensional and needs careful assessment across feelings, evaluations, and functioning.",
    "source": "Robert A. Cummins, \"Measuring Happiness and Subjective Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Live by values that can survive a bad mood.",
    "summary": "Eudaimonic research emphasizes growth, virtue, authenticity, and purpose as foundations for a life that feels deeply worthwhile.",
    "source": "Veronika Huta, \"Eudaimonia\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Autonomy is not doing whatever you want; it is endorsing the life you are actually living.",
    "summary": "Self-determination theory links well-being to autonomy, competence, relatedness, awareness, and goals chosen for their own worth.",
    "source": "Christopher P. Niemiec and Richard M. Ryan, \"Autonomy and its Relation to Full Functioning and Organismic Wellness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A full life lets you feel, evaluate, and function better.",
    "summary": "Functional well-being models combine emotion, life appraisal, and effective functioning instead of treating happiness as one single feeling.",
    "source": "Joar Vittersø, \"Functional Well-being: Happiness as Feelings, Evaluations, and Functioning\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not inherit someone else’s definition of the good life without testing it.",
    "summary": "Historical accounts show that happiness has carried different meanings across eras, making reflection on one’s own definition essential.",
    "source": "Darrin M. McMahon, \"The Pursuit of Happiness in History\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Happiness is not only private comfort; it is also right relationship with people and obligations.",
    "summary": "Early Chinese thought often ties well-being to character, harmony, cultivation, and the quality of one’s role in community.",
    "source": "Philip J. Ivanhoe, \"Happiness in Early Chinese Thought\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Ask whether your happiness is shallow relief or a life you can stand behind.",
    "summary": "Philosophical work on happiness distinguishes mood, life satisfaction, and deeper forms of psychic affirmation or flourishing.",
    "source": "Daniel M. Haybron, \"The Nature and Significance of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Use philosophy to clean up vague desires before you build your life around them.",
    "summary": "Philosophical methods help clarify what counts as happiness, what makes it valuable, and how evidence should be interpreted.",
    "source": "Valerie Tiberius, \"Philosophical Methods in Happiness Research\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Train the mind toward compassion, because self-absorption is a small room.",
    "summary": "Buddhist approaches connect durable happiness with attention, compassion, reduced craving, and freedom from habitual mental grasping.",
    "source": "Matthieu Ricard, \"A Buddhist View of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Treat happiness as something that happens between people, not only inside one person.",
    "summary": "Relational Buddhist psychology frames well-being as emerging through kindness, dialogue, interdependence, and shared meaning.",
    "source": "G. T. Maurits Kwee, \"Relational Buddhism: An Integrative Psychology of Happiness amidst Existential Suffering\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A quiet mind is not empty; it is available.",
    "summary": "Meditation and mindfulness research links present-centered awareness with concentration, empathy, autonomy, and reduced rumination.",
    "source": "Peter Malinowski, \"Flourishing through Meditation and Mindfulness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Give your nervous system places where nothing has to be won.",
    "summary": "Low-arousal routes to happiness highlight silence, contemplation, gentle attention, and calm absorption as undervalued paths to contentment.",
    "source": "Jane Henry, \"Quieting the Mind and Low Arousal Routes to Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Money helps most when it buys stability, freedom, and time, not an endless scoreboard.",
    "summary": "Economic happiness research examines how income, incentives, comparison, unemployment, and choice shape life satisfaction.",
    "source": "Bruno S. Frey and Alois Stutzer, \"Economics and the Study of Individual Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Do not compare your life with a culture that rewards different things.",
    "summary": "Cross-national well-being research shows that happiness depends on cultural context, values, institutions, and how well-being is defined.",
    "source": "William Tov and Evelyn W. M. Au, \"Comparing Well-being Across Nations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Where you live quietly teaches you what to expect from life.",
    "summary": "Geography of happiness research links place, inequality, opportunity, health, and local conditions to well-being.",
    "source": "Dimitris Ballas and Danny Dorling, \"The Geography of Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Buy less identity and build more life.",
    "summary": "Consumer society research warns that material aspiration can shape happiness through status, meaning, identity, and comparison.",
    "source": "Aaron Ahuvia and Elif Izberk-Bilgin, \"Well-being in Consumer Societies\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A fulfilling life should not require a world that burns out to support it.",
    "summary": "Sustainable well-being research connects human flourishing with ecological limits, social fairness, and long-term development.",
    "source": "Sam Thompson, Nic Marks, and Tim Jackson, \"Well-being and Sustainable Development\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Education should train attention, judgment, character, and joy, not only performance.",
    "summary": "Education and well-being research argues that schools shape happiness through purpose, capability, relationships, and values.",
    "source": "John White, \"Education and Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Resilience is built before the storm, in small rehearsals of coping.",
    "summary": "School resilience research studies social-emotional skills, optimistic thinking, problem solving, and supportive environments.",
    "source": "Toni Noble and Helen McGrath, \"Well-being and Resilience in Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A classroom can teach people how to notice what is good without denying what is hard.",
    "summary": "Classroom happiness work applies gratitude, strengths, positive emotion, and reflective practice to learning environments.",
    "source": "Jennifer M. Fox Eades, Carmel Proctor, and Martin Ashley, \"Happiness in the Classroom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Practice bouncing back while the stakes are low.",
    "summary": "Resilience education draws on prevention science and positive psychology to build coping skills before serious distress appears.",
    "source": "Jane E. Gillham, Rachel M. Abenavoli, Steven M. Brunwasser, Mark Linkins, Karen J. Reivich, and Martin E. P. Seligman, \"Resilience Education\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Wisdom is knowing which good thing matters most right now.",
    "summary": "Wisdom education research emphasizes balancing personal, interpersonal, and broader interests over short-term cleverness.",
    "source": "Robert J. Sternberg, \"Teaching for Wisdom\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Culture beats slogans: build environments where well-being is normal behavior.",
    "summary": "Positive education case work shows that well-being improves when practices are embedded into school culture, staff training, and daily routines.",
    "source": "Mathew A. White, \"Positive Education at Geelong Grammar School\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Make your work a place where people can do good, not just get through tasks.",
    "summary": "Organizational virtuousness research links compassion, forgiveness, integrity, and meaning with flourishing workplaces.",
    "source": "Kim S. Cameron and Arran Caza, \"Virtuousness as a Source of Happiness in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "A job shapes you, so shape the job back.",
    "summary": "Work and well-being research examines how identity, calling, task meaning, and workplace relationships affect happiness.",
    "source": "Brianna Barker Caza and Amy Wrzesniewski, \"How Work Shapes Well-being\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Design work so effort has room to become energy instead of depletion.",
    "summary": "Work design research links autonomy, feedback, challenge, support, and active job crafting with employee well-being.",
    "source": "Ben J. Searle and Sharon K. Parker, \"Work Design and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Confidence, hope, optimism, and resilience are not moods; they are working assets.",
    "summary": "Psychological capital research treats these capacities as developable resources that support performance and well-being.",
    "source": "Carolyn M. Youssef and Fred Luthans, \"Managing Psychological Capital in Organizations\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Notice your best self when it shows up, then build conditions that invite it back.",
    "summary": "Reflected best-self research uses positive identity feedback to help people align work with vitality and value creation.",
    "source": "Laura Morgan Roberts, \"Reflected Best Self Engagement at Work\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "The quality of closeness matters more than the label attached to it.",
    "summary": "Close relationship research links well-being more strongly to relationship quality, support, and responsiveness than status alone.",
    "source": "Shimon Saphire-Bernstein and Shelley E. Taylor, \"Close Relationships and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Your attachment patterns affect how much joy you can receive.",
    "summary": "Attachment research studies how security, avoidance, and anxiety shape the experience and consequences of positive emotions.",
    "source": "Mario Mikulincer and Phillip R. Shaver, \"Adult Attachment and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Support works best when it feels reliable, respectful, and real.",
    "summary": "Perceived social support research shows that feeling supported is tied to personality, relational processes, stress buffering, and happiness.",
    "source": "Brian Lakey, \"Perceived Social Support and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  },
  {
    "quote": "Friendship is not a side quest; it is part of the architecture of happiness.",
    "summary": "Friendship research points to intimacy, companionship, support, and conflict management as major contributors to well-being.",
    "source": "Melikşah Demir, Haley Orthel, and Adrian Keith Andelin, \"Friendship and Happiness\", in The Oxford Handbook of Happiness, edited by Susan A. David, Ilona Boniwell, and Amanda Conley Ayers, Oxford University Press, 2013."
  }
];
