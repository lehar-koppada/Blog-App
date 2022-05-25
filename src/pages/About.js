import React from 'react'

const About = () => {
  return (
    <div className="text-gray-600 body-font font-['Shadows-Into-Light-cursive']">
        <div className="container px-5 py-12 mx-auto">
          <div className="  sm:flex-row sm:items-center items-start mx-auto" >
        
        <h2 className='text-3xl' > <em> What Can You Write About? </em></h2> 
        <br />
        <ul>
            <li><strong>Career </strong><em>– All kinds of career topics that would appeal to: employees, managers, freelancers, entrepreneurs, and students.</em> These articles should relate specifically to professional growth and decision making in the the programming and developer industry.</li>
            <br />
            <li><strong>Marketing Yourself </strong> <em>– Blogging, personal branding, speaking, networking, using social networks, podcasting.</em>These articles should teach programmers how to sell themselves to others, either through their current position or as a freelancer and/or entrepreneur.</li>
            <br />
            <li><strong>Productivity </strong> <em>– System, hacks, learning, etc.</em>These articles should give programmers the tools to accelerate their processes and put their best work (and selves) out to the world, especially if they lack the motivation to do so.</li>
            <br />
            <li><strong>Motivational </strong> <em>– Psychology, social skills, dealing with fear, failure, attitude, love, inspiration, success</em>These articles should harken back to the basic premise of Simple Programmer: Making The Complex Simple. Using anecdotes, studies, or other empiric evidence to break these big picture ideas into implementable action items is key.</li>
            <br />
            <li><strong>Fitness, finance, and misc. </strong> <em>– Other content, but strongly related to programmers.</em>These articles should follow a similar structure to Motivational articles, focusing especially on giving Simple Programmer readers tips and tricks that they can apply in their lives for big changes and results.</li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default About;