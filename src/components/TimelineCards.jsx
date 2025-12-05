function TimelineCards() {
    const events = [
        {
            year: "2018",
            text: `
            I had no idea what programming was. 
            In the first semester, we had a subject called Programming and Data Structures in C.
            I hated it in the beginning, but somehow it made me curious about how everything works.
            So, I picked up a book, opened Google, and searched for the top 10 programming languages.
            I decided to learn C from scratch, only to realize it was very irritating to code in DevBlocks (the code editor).
            Then I got stuck in tutorial hell, procrastinated, got bored, and quit coding.
            Also, am I the only one who thinks C is interesting and irritating at the same time?
            `
        },
        {
            year: "2019",
            text: `
            I saw my friends coding like tech geniuses and thought, "You know what? I should do this."
            I opened YouTube and searched for a C++ full course. Found a 6-hour course and started coding again.
            Surprisingly, this time it felt very good. I felt like a 10x programmer without realizing there's a whole concept
            called Data Structures and Algorithms. When I finally came across DSA, I got confused and bored immediately.
            Quit coding for the second time.
            `
        },
        {
            year: "2020-2021",
            text: `
            I got to know about web development and started learning HTML and CSS. 
            My goal was to build an e-commerce website just to add it to my resume.
            Long story short: I got stuck at CSS. Even before knowing about UI/UX design, I worried about every color, font size, height, and width.
            So yeah… quit coding for the third time.
            `
        },
        {
            year: "2022-2023",
            text: `
            I started building my first portfolio using HTML and CSS. 
            Setting up the navigation bar, creating contact forms, and watching raw code turn into a beautiful site motivated me a lot.
            I finished the site and uploaded it to Netlify. 
            I thought I was the next full-stack developer (even though I still didn’t know JavaScript very well).
            `
        },
        {
            year: "2024",
            text: `
            Over the years, I realized I was just watching tutorials and copying code into VS Code. 
            But when something unexpected came along, I got irritated, bored, and quit multiple times.
            I also realized I was watching too many tutorials.
            Even though I learned Python and built a web scraper, I felt maybe coding was too hard and didn't suit me.
            `
        },
        {
            year: "2025",
            text: `
            After quitting multiple times, many people would give up and never come back. But to this day,
            I don’t know why my brain *craves* to code. 
            So, I decided to restart programming — but this time, I learned **how to learn**.
            I picked up where I left off, revised Python and JavaScript, and started building mini-projects.
            This time there was no tutorial hell, no quitting when I forgot how to center a div, and no rage when my code didn’t work
            (okay fine… I still rage sometimes, come on man, you know how frustrating it gets).
            I realized I learn programming better by **building projects**, not watching tutorials.
            Learned the MERN stack very fast by building stuff.
            `
        },
    ];


  return (
    <div className="timeline-container">
      <div className="timeline-line" />

      <div className="timeline-items">
        {events.map((ev, i) => (
          <div className="timeline-item" key={i}>
            
            <div className="timeline-left">
              <span className="timeline-year">{ev.year}</span>
            </div>

            <div className="timeline-center">
              <span className="timeline-dot" />
            </div>

            <div className="timeline-right">
              <div className="timeline-card">
                <p>{ev.text}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )

}

export default TimelineCards;