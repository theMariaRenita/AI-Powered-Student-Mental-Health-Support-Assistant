export const greetingMessage = `Hello! I'm here to support you. I'm a mental health support assistant designed to listen and help with student life challenges.

I can help with:
• Stress management and coping techniques
• Study-life balance tips
• Sleep and healthy habits
• Managing anxiety
• General wellness guidance

**Important:** I'm not a replacement for professional help. If you're in crisis, please reach out to a counselor, trusted adult, or mental health helpline.

How can I support you today?`;

export const crisisResources = {
  title: "Crisis Support Resources",
  content: `If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out for immediate help:

**24/7 Crisis Hotlines:**
• National Suicide Prevention Lifeline: 988 or 1-800-273-8255
• Crisis Text Line: Text HOME to 741741
• International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/

**Campus Resources:**
• Contact your school counseling center
• Speak with a trusted professor or advisor
• Visit your campus health center

You don't have to face this alone. Professional help is available and reaching out is a sign of strength.`
};

export const responseDatabase: Record<string, string[]> = {
  stress: [
    `I understand that stress can feel overwhelming, especially as a student. Let's work through this together.

**Quick Stress Relief Techniques:**
• **Deep Breathing:** Try the 4-7-8 technique - breathe in for 4 seconds, hold for 7, exhale for 8
• **Progressive Muscle Relaxation:** Tense and release each muscle group from toes to head
• **5-4-3-2-1 Grounding:** Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste

**Longer-term Strategies:**
• Break tasks into smaller, manageable steps
• Prioritize and make a realistic to-do list
• Schedule regular breaks (try the Pomodoro technique: 25 min work, 5 min break)
• Practice saying "no" to avoid overcommitment

Would you like to talk more about what's causing your stress?`,
    `Stress is your body's way of responding to demands, and it's completely normal to feel this way. You're not alone in this.

**Remember to:**
• **Be kind to yourself** - you're doing your best
• **Take one thing at a time** - you don't have to solve everything today
• **Connect with others** - talk to friends, family, or a counselor
• **Move your body** - even a short walk can help reduce stress hormones

Sometimes stress signals that we need to adjust our approach. What area of your life feels most stressful right now?`
  ],

  study: [
    `Balancing studies with life can be challenging. Let's find strategies that work for you.

**Study-Life Balance Tips:**
• **Set Boundaries:** Designate specific study hours and stick to them
• **Create a Schedule:** Block time for classes, studying, AND self-care
• **Use the 80/20 Rule:** Focus on the 20% of efforts that yield 80% of results
• **Quality Over Quantity:** Focused study sessions are better than long, distracted ones

**Make Time for Joy:**
• Schedule social activities like you schedule classes
• Pursue hobbies and interests outside academics
• Take guilt-free breaks - they improve productivity
• Remember: You are more than your grades

What aspect of balance feels most challenging for you?`,
    `Finding study-life balance is an ongoing process, and it's great that you're thinking about it.

**Practical Strategies:**
• **Time Blocking:** Assign specific times to different activities
• **Study Smarter:** Use active recall and spaced repetition
• **Set Realistic Goals:** Aim for progress, not perfection
• **Plan Downtime:** Schedule relaxation like any other appointment

**Warning Signs You Need More Balance:**
• Constant exhaustion
• Declining grades despite more study time
• Missing social events regularly
• Feeling isolated or burned out

Are you experiencing any of these? Let's talk about it.`
  ],

  sleep: [
    `Sleep is crucial for your mental health, memory, and academic performance. Let's improve your sleep routine.

**Healthy Sleep Habits:**
• **Consistent Schedule:** Go to bed and wake up at the same time daily (yes, even weekends!)
• **Wind-Down Routine:** Start relaxing 30-60 minutes before bed
• **Optimize Your Environment:** Cool, dark, and quiet room
• **Limit Screens:** Avoid blue light 1 hour before bed

**Things to Avoid:**
• Caffeine after 2 PM
• Heavy meals close to bedtime
• Studying in bed (keep bed for sleep only)
• Napping after 3 PM or for more than 20-30 minutes

**If You Can't Sleep:**
• Don't force it - get up and do a calm activity
• Try reading or listening to calming music
• Practice deep breathing or meditation

How many hours of sleep are you typically getting?`,
    `Sleep problems are common among students, but they can really impact your wellbeing. Let's address this.

**Understanding Sleep:**
• Most young adults need 7-9 hours per night
• Quality matters as much as quantity
• Consistent sleep patterns help regulate your body clock

**Quick Tips:**
• **Morning sunlight:** Helps set your internal clock
• **Regular exercise:** But not within 3 hours of bedtime
• **Relaxing rituals:** Warm shower, light stretching, journaling
• **Worry journal:** Write down tomorrow's concerns before bed

If sleep problems persist for more than 2-3 weeks, consider speaking with a healthcare provider. Sleep disorders are treatable!

What's currently interfering with your sleep?`
  ],

  anxiety: [
    `Anxiety is one of the most common concerns among students. You're brave for acknowledging it and seeking support.

**Understanding Anxiety:**
• Anxiety is your mind trying to protect you from perceived threats
• Some anxiety is normal and can even be helpful
• It becomes a problem when it interferes with daily life

**Coping Techniques:**
• **Challenge worried thoughts:** Ask "Is this thought realistic? What's the evidence?"
• **Stay present:** Anxiety often focuses on the future - ground yourself in now
• **Breathing exercises:** Slow, deep breaths activate your calm response
• **Limit caffeine and sugar:** They can increase anxious feelings

**Helpful Practices:**
• Regular physical activity
• Mindfulness or meditation (even 5 minutes helps)
• Maintain social connections
• Keep a regular routine

What situations tend to trigger your anxiety?`,
    `Managing anxiety is a skill that improves with practice. Be patient with yourself.

**When Anxiety Strikes:**
• **Name it:** "I'm feeling anxious" - acknowledging it reduces its power
• **Accept it:** Fighting anxiety often makes it worse
• **Shift focus:** Engage your senses or do a simple task
• **Reach out:** Talk to someone you trust

**Long-term Management:**
• **Regular exercise:** One of the most effective anxiety reducers
• **Sleep and nutrition:** A tired or hungry body feels more anxious
• **Limit worry time:** Set aside 15 minutes daily for worries, then move on
• **Professional help:** Therapy (especially CBT) is highly effective for anxiety

Remember: Occasional anxiety is human. Persistent, overwhelming anxiety deserves professional support.

Would you like to practice a calming technique together?`
  ],

  relationships: [
    `Relationships are an important part of student life, and navigating them can be complex. I'm here to listen.

**Healthy Relationship Signs:**
• Mutual respect and trust
• Good communication
• Support for each other's goals
• Healthy boundaries
• Time together AND apart

**Relationship Challenges:**
• **Communication issues:** Practice "I feel" statements vs "You always"
• **Boundaries:** It's okay to say no and have your own space
• **Conflict:** Disagreements are normal - how you handle them matters
• **Loneliness:** Building connections takes time and effort

**Tips for Building Connections:**
• Join clubs or groups aligned with your interests
• Be open to different types of friendships
• Quality over quantity in relationships
• Reach out first - others often feel the same way

What kind of relationship situation is on your mind?`,
    `Navigating relationships while managing academic pressure can be tough. Let's talk about it.

**Common Student Relationship Challenges:**
• **Homesickness:** Missing family and old friends
• **Making new friends:** Starting over in a new environment
• **Romantic relationships:** Balancing dating with studies
• **Roommate conflicts:** Living with others
• **Social pressure:** Feeling like you should be more social

**Remember:**
• **Your pace is okay:** You don't have to have it all figured out
• **Authenticity matters:** Be yourself - the right people will appreciate you
• **It's okay to be alone sometimes:** Solitude isn't the same as loneliness
• **Seek help if needed:** Campus counselors can help with social anxiety

**Red Flags to Watch:**
• Relationships that drain you consistently
• Lack of respect or trust
• Feeling controlled or manipulated
• Isolation from other friends/family

Is there a specific relationship concern you'd like to discuss?`
  ],

  general: [
    `I'm here to listen and support you. Your wellbeing matters.

**General Wellness Tips:**
• **Physical Health:** Eat nutritious meals, stay hydrated, exercise regularly
• **Mental Health:** Practice self-compassion, set boundaries, seek support
• **Social Wellbeing:** Maintain connections, join communities, communicate openly
• **Academic Balance:** Study effectively, take breaks, ask for help when needed

**Daily Self-Care Ideas:**
• Start your day with intention
• Take short breaks to breathe and stretch
• Connect with at least one person
• Do something you enjoy, even for 10 minutes
• Reflect on one thing you're grateful for

**When to Seek Professional Help:**
• Persistent sadness or hopelessness
• Difficulty functioning in daily life
• Changes in sleep or appetite
• Thoughts of self-harm
• Substance abuse concerns

Remember: Taking care of your mental health is just as important as your physical health. You deserve support.

What's on your mind today?`,
    `Thank you for reaching out. It takes courage to talk about what you're going through.

**Self-Care Isn't Selfish:**
Taking care of yourself helps you be there for others and perform better academically. You can't pour from an empty cup.

**Building Resilience:**
• **Develop coping skills:** Have a toolkit of strategies
• **Maintain perspective:** This difficult time won't last forever
• **Stay connected:** Isolation makes everything harder
• **Practice self-compassion:** Treat yourself like you'd treat a good friend

**Small Steps Matter:**
You don't have to make huge changes. Small, consistent actions add up:
• Drinking enough water
• Getting outside briefly
• Reaching out to one person
• Taking five deep breaths

Whatever you're facing, you don't have to face it alone. I'm here to listen, and there are many resources available to support you.

How are you feeling right now?`
  ],

  crisis: [
    `I'm concerned about what you're sharing. Your safety is the top priority.

${crisisResources.content}

**Right Now:**
• If you're in immediate danger, please call 911 or go to your nearest emergency room
• You can also call 988 (Suicide & Crisis Lifeline) to talk with someone immediately
• Text HOME to 741741 to reach the Crisis Text Line

**You Matter:**
These feelings are temporary, even though they don't feel that way right now. Help is available, and things can get better. Please reach out to one of these resources - trained professionals are ready to support you.

I care about your wellbeing, but I'm not equipped to provide the crisis support you need. Please connect with a professional who can help you through this.`,
    `Thank you for trusting me with this. I want to help, but I need you to reach out to someone who can provide the immediate support you need.

**Please Contact:**
• **988 Suicide & Crisis Lifeline:** Call or text 988
• **Crisis Text Line:** Text HOME to 741741
• **Emergency Services:** Call 911 if you're in immediate danger
• **Campus Counseling:** Visit or call your school's counseling center

**These are NOT signs of weakness:**
Reaching out for help during a crisis is incredibly brave and strong. Mental health crises are medical emergencies, just like physical ones.

**While You Seek Help:**
• Stay with someone you trust
• Remove any means of self-harm
• Avoid drugs and alcohol
• Focus on the present moment

You deserve to feel better, and professional help can make that happen. Please reach out to one of these resources right now.`
  ]
};

export const keywords: Record<string, keyof typeof responseDatabase> = {
  'stress': 'stress',
  'stressed': 'stress',
  'overwhelmed': 'stress',
  'pressure': 'stress',
  'anxious': 'anxiety',
  'anxiety': 'anxiety',
  'worried': 'anxiety',
  'panic': 'anxiety',
  'fear': 'anxiety',
  'nervous': 'anxiety',
  'study': 'study',
  'balance': 'study',
  'homework': 'study',
  'exam': 'study',
  'test': 'study',
  'grades': 'study',
  'workload': 'study',
  'sleep': 'sleep',
  'tired': 'sleep',
  'exhausted': 'sleep',
  'insomnia': 'sleep',
  'rest': 'sleep',
  'relationship': 'relationships',
  'friend': 'relationships',
  'lonely': 'relationships',
  'alone': 'relationships',
  'social': 'relationships',
  'roommate': 'relationships',
  'dating': 'relationships',
  'suicide': 'crisis',
  'kill': 'crisis',
  'die': 'crisis',
  'death': 'crisis',
  'harm': 'crisis',
  'hurt': 'crisis',
  'end it': 'crisis',
};
