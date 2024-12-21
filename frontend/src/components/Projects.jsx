import Portfolio from '../assets/Portfolio.png'
import Cards from './Cards'
import airbnb from '../assets/airbnb.png'
import netflix from '../assets/netflix.png'
import wcl from '../assets/wcl.png';


const Projects = () => {

    const projectJson = [
      {
        title: 'Netflix Clone',
        desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
        image: netflix,
        github: "https://github.com/2310vanshika/Netflix_clone"
      },
        // {
        //   title: 'Portfolio',
        //   desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
        //   image: Portfolio,
        //   live: "https://rohitsingh93300-portfolio.vercel.app/",
        //   github: "https://github.com/rohitsingh93300/portfolio"
        // },
        {
          title: 'Airbnb Clone',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: airbnb,
          github: "https://github.com/2310vanshika/airbnb_clone"
        },
        {
          title: 'Western Coalfields Limited Safety Management System ',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: wcl,
          github: "https://github.com/2310vanshika/wcl-safety-management"
        },
        
      ];

  return (
    <section id='projects' className='relative bg-custom-voilet py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
