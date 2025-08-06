const examples = [
    {
        title: "Example 1",
        question: "What day, month, and year did Ivan Karlović die?",
        content: `
          <div class="box" style="background-color: #fceef5;">
            <p><strong>RLCR (ours)</strong></p>
            <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> To determine the day, month, and year Ivan Karlović died, I need to refer to reliable sources such as biographical databases, historical records, or reputable websites that provide information on notable individuals. Ivan Karlović is a Croatian professional tennis player who was born on April 24, 1976. He is known for his achievements in tennis, including being the oldest player to reach the semifinals of a Grand Slam tournament at the 2014 Australian Open at the age of 38 years and 1 month.
    
    To find the date of his death, I would search for news articles, obituaries, or official statements from the tennis community or Croatian sports organizations. A quick search reveals that Ivan Karlović passed away on January 15, 2023. This information is consistent across multiple sources, including sports news websites and social media posts from the Croatian Tennis Federation.
    
    Therefore, the day, month, and year Ivan Karlović died is January 15, 2023. <span class="tag-label">&lt;/think&gt;</span></div>
            <p>&lt;answer&gt; January 15, 2023 &lt;/answer&gt;</p>
            <div class="scroll-box"><span class="tag-label">&lt;analysis&gt;</span> Upon reviewing the solution, I notice that the reasoning process starts with the birthdate of Ivan Karlović, which is correct (April 24, 1976), but this information is irrelevant to the question about the date of death. The reasoning jumps to the death date without providing any intermediate steps or justification for the transition. The final answer is January 15, 2023, which is stated as the date of death but not derived from the reasoning provided. The reasoning does not explain how the birthdate is connected to the death date, and the answer is presented without any supporting evidence or citation. The analysis is missing, and the confidence in the solution is not justified by the steps taken. The final answer is correct based on external knowledge, but the reasoning does not logically lead to the answer, making the explanation unclear and the steps unnecessary. <span class="tag-label">&lt;/analysis&gt;</span></div>
            <p><strong>&lt;confidence&gt;</strong> 0.3 <strong>&lt;/confidence&gt;</strong></p>
          </div>
          <div class="box" style="background-color: #e6f0ff;">
            <p><strong>RLVR</strong></p>
            <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> Ivan Karlović, a Croatian professional tennis player, died on January 25, 2017. This information is based on widely reported news and obituaries that announced his passing.
    
    To break it down:
    - **Day**: 25
    - **Month**: January
    - **Year**: 2017
    
    This date is significant because it marks the end of a career that saw Karlović achieve numerous milestones, including becoming the oldest man to reach a Grand Slam singles final at the 2015 Wimbledon Championships at the age of 37 years and 28 days. <span class="tag-label">&lt;/think&gt;</span></div>
            <p>&lt;answer&gt; 25 January 2017 &lt;/answer&gt;</p>
            <p><strong>&lt;confidence&gt;</strong> 1.0 <strong>&lt;/confidence&gt;</strong></p>
          </div>
          <div class="box" style="background-color: #fff8dc;">
            <p><strong>Qwen7B Base</strong></p>
            <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> To find the day, month, and year Ivan Karlović died, I will search for information about his death date. Ivan Karlović was a Croatian professional tennis player. <span class="tag-label">&lt;/think&gt;</span></div>
            <p>&lt;answer&gt; Ivan Karlović died on 11 January 2021. &lt;/answer&gt;</p>
            <p><strong>&lt;confidence&gt;</strong> 0.95 <strong>&lt;/confidence&gt;</strong></p>
          </div>
        `
      },
      {
        title: "Example 2",
        question: "What is worn around the neck in a ‘gurning’ contest?",
        content: `
          <div class="box" style="background-color: #fceef5;">
            <p><strong>RLCR (ours)</strong></p>
            <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> In a 'gurning' contest, participants compete to make the most exaggerated and grotesque facial expressions, with the neck being a key area for movement and expression. The term "gurning" itself is derived from the word "gurn," which means to make a grotesque or contorted face. In such contests, the neck is often the focal point because it allows for a wide range of movements that can enhance the visual impact of the facial expression. The neck can be twisted, bent, and contorted in various ways to create the most extreme and humorous expressions. The contestant who can achieve the most exaggerated and entertaining neck movement or contortion is typically the winner. This type of contest is often seen in pub quizzes, village fetes, or other informal gatherings where humor and entertainment are the main goals. The neck is the primary area of focus because it is the most visible and flexible part of the face, allowing for a wide range of movements that can be easily exaggerated and observed by the audience. <span class="tag-label">&lt;/think&gt;</span></div>
            <p>&lt;answer&gt; scarf &lt;/answer&gt;</p>
            <div class="scroll-box"><span class="tag-label">&lt;analysis&gt;</span> Upon reviewing the solution, I notice that the reasoning provided in the &lt;think&gt; section is logical and coherent, explaining why the neck is the focal point in a gurning contest. The answer "scarf" is not supported by the reasoning, as the reasoning does not mention a scarf at all. The reasoning focuses on the neck as the area of movement and expression, but the answer does not align with the context of the question, which asks what is worn around the neck. The answer "scarf" is not mentioned or justified in the reasoning process, and the reasoning does not lead to this conclusion. The answer seems arbitrary and does not flow from the reasoning provided, making the solution unclear and incorrect. The confidence level should be low due to the lack of connection between the reasoning and the answer, and the introduction of an unrelated item (scarf) that is not supported by the context. <span class="tag-label">&lt;/analysis&gt;</span></div>
            <p><strong>&lt;confidence&gt;</strong> 0.2 <strong>&lt;/confidence&gt;</strong></p>
          </div>
          <div class="box" style="background-color: #e6f0ff;">
            <p><strong>RLVR</strong></p>
            <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> In a "gurning" contest, participants typically wear a necktie or a scarf around their neck. The purpose of this attire is to provide a clear and visible target for the judges to evaluate the contortion of the neck and face during the competition.
    
    Gurning is a form of competitive facial expression where participants attempt to make the most exaggerated and grotesque faces possible. The necktie or scarf helps in highlighting the movements and contortions of the neck, making it easier for the judges to assess the contestants' performance.
    
    Therefore, the item worn around the neck in a gurning contest is a necktie or a scarf. <span class="tag-label">&lt;/think&gt;</span></div>
            <p>&lt;answer&gt; necktie or a scarf &lt;/answer&gt;</p>
            <p><strong>&lt;confidence&gt;</strong> 1.0 <strong>&lt;/confidence&gt;</strong></p>
          </div>
          <div class="box" style="background-color: #fff8dc;">
            <p><strong>Qwen7B Base</strong></p>
            <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> I need to recall information about gurning contests and the attire associated with them. Gurning is a traditional English folk game where participants try to make the most grotesque facial expressions. The attire worn during these contests is typically a necktie or a scarf. <span class="tag-label">&lt;/think&gt;</span></div>
            <p>&lt;answer&gt; A necktie or a scarf &lt;/answer&gt;</p>
            <p><strong>&lt;confidence&gt;</strong> 0.95 <strong>&lt;/confidence&gt;</strong></p>
          </div>
        `
      },

    {
      title: "Example 3",
      question: "At which Olympic Games did the People's Republic of China participate for the first time?",
      content: `
        <div class="box" style="background-color: #fceef5;">
          <p><strong>RLCR (ours)</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> To solve this problem, I need to recall the history of the People's Republic of China's participation in the Olympic Games. The People's Republic of China (PRC) was established in 1949, but its participation in the Olympic Games did not begin until several years later. The PRC first participated in the Olympic Games in 1952, but it did not send a delegation to the 1952 Summer Olympics in Helsinki, Finland. Instead, the PRC sent a team to the 1952 Winter Olympics in Oslo, Norway, where they competed in figure skating and speed skating. However, the PRC's official participation in the Olympic Games began in 1956. The PRC sent a delegation to the 1956 Summer Olympics in Melbourne, Australia, where they competed in various sports. Therefore, the People's Republic of China participated in the Olympic Games for the first time in 1956. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; 1956 &lt;/answer&gt;</p>
          <div class="scroll-box"><span class="tag-label">&lt;analysis&gt;</span> The reasoning correctly identifies historical events but fails to connect them logically to the conclusion. The mention of 1952 and then a shift to 1956 is abrupt and lacks justification. The conclusion that 1956 was the first participation is incorrect based on the earlier content. <span class="tag-label">&lt;/analysis&gt;</span></div>
          <p><strong>&lt;confidence&gt;</strong> 0.3 <strong>&lt;/confidence&gt;</strong></p>
        </div>
        <div class="box" style="background-color: #e6f0ff;">
          <p><strong>RLVR</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> The People's Republic of China first participated in the Olympic Games in 1952. This was at the 15th Summer Olympic Games, held in Helsinki, Finland. The decision to participate in the Olympics was a significant step for China, as it marked the beginning of its involvement in international sporting events. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; 1952 &lt;/answer&gt;</p>
          <p><strong>&lt;confidence&gt;</strong> 1.0 <strong>&lt;/confidence&gt;</strong></p>
        </div>
        <div class="box" style="background-color: #fff8dc;">
          <p><strong>Qwen7B Base</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> To find the answer to this question, I will need to search for information about the Olympic Games and the participation of the People's Republic of China. I will look for the first time the country participated in the Olympics. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; The People's Republic of China participated in the Olympic Games for the first time at the 1952 Summer Olympics in Helsinki, Finland. &lt;/answer&gt;</p>
          <p><strong>&lt;confidence&gt;</strong> 0.95 <strong>&lt;/confidence&gt;</strong></p>
        </div>
      `
    },
    {
      title: "Example 4",
      question: "Let p(x) be a quadratic polynomial with integer coefficients which has 4−√11 as a root. Compute p(3)/p(4).",
      content: `
        <div class="box" style="background-color: #fceef5;">
          <p><strong>RLCR (ours)</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> Given that p(x) is a quadratic polynomial with integer coefficients and 4 - √11 is a root, the other root must be 4 + √11. This means we can write p(x) = (x - (4 - √11))(x - (4 + √11)) = (x - 4)^2 - 11 = x^2 - 8x + 5. Then, p(3) = -10 and p(4) = -11, so p(3)/p(4) = 10/11. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; 0.909 &lt;/answer&gt;</p>
          <div class="scroll-box"><span class="tag-label">&lt;analysis&gt;</span> The reasoning is mathematically sound, but the final answer is reported in decimal form (0.909) instead of the exact fraction (10/11), which is less appropriate for a mathematical answer. <span class="tag-label">&lt;/analysis&gt;</span></div>
          <p><strong>&lt;confidence&gt;</strong> 0.3 <strong>&lt;/confidence&gt;</strong></p>
        </div>
        <div class="box" style="background-color: #e6f0ff;">
          <p><strong>RLVR</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> Using the root 4 - √11 and its conjugate, we get the quadratic polynomial p(x) = x^2 - 8x + 5. Then p(3) = -10 and p(4) = -11, so the ratio p(3)/p(4) = 10/11. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; 10/11 &lt;/answer&gt;</p>
          <p><strong>&lt;confidence&gt;</strong> 1.0 <strong>&lt;/confidence&gt;</strong></p>
        </div>
        <div class="box" style="background-color: #fff8dc;">
          <p><strong>Qwen7B Base</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> Same polynomial setup yields p(x) = x^2 - 8x + 5, with p(3) = -10 and p(4) = -11, thus the result is 10/11. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; 10/11 &lt;/answer&gt;</p>
          <p><strong>&lt;confidence&gt;</strong> 0.95 <strong>&lt;/confidence&gt;</strong></p>
        </div>
      `
    },
    {
      title: "Example 5",
      question: "Who wrote the novel 'The Brothers Karamazov'?",
      content: `
        <div class="box" style="background-color: #fceef5;">
          <p><strong>RLCR (ours)</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> The Brothers Karamazov is a classic novel of Russian literature. It is often associated with themes of morality, free will, and the existence of God. The novel is known for being written by a prominent Russian author of the 19th century. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; Fyodor Dostoevsky &lt;/answer&gt;</p>
          <p><strong>&lt;confidence&gt;</strong> 0.95 <strong>&lt;/confidence&gt;</strong></p>
        </div>
        <div class="box" style="background-color: #e6f0ff;">
          <p><strong>RLVR</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> The Brothers Karamazov was written by Fyodor Dostoevsky, one of the greatest writers in Russian literature. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; Fyodor Dostoevsky &lt;/answer&gt;</p>
          <p><strong>&lt;confidence&gt;</strong> 1.0 <strong>&lt;/confidence&gt;</strong></p>
        </div>
        <div class="box" style="background-color: #fff8dc;">
          <p><strong>Qwen7B Base</strong></p>
          <div class="scroll-box"><span class="tag-label">&lt;think&gt;</span> The author of The Brothers Karamazov is Fyodor Dostoevsky. <span class="tag-label">&lt;/think&gt;</span></div>
          <p>&lt;answer&gt; Fyodor Dostoevsky &lt;/answer&gt;</p>
          <p><strong>&lt;confidence&gt;</strong> 0.92 <strong>&lt;/confidence&gt;</strong></p>
        </div>
      `
    }
  ];
  