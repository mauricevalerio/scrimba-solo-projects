import Badge from './components/badges'
import Banner from './components/banners'
import Card from './components/cards'
import Testimonial from './components/testimonials'
import Tooltip from './components/tooltip'
import Toast from './components/toast'
import { FaAccessibleIcon } from 'react-icons/fa'

export default function App() {
  return (
    <>
      {/* BADGES */}
      <div className='badge__container mb'>
        <h1 className='headers'>Badges</h1>
        <div className='badge__container--inner'>
          <h3 className='labels'>Square</h3>
          <Badge color='gray' />
          <Badge color='red' />
          <Badge color='yellow' />
          <Badge color='green' />
          <Badge color='blue' />
          <Badge color='indigo' />
          <Badge color='purple' />
          <Badge color='pink' />
        </div>
        <div className='badge__container--inner'>
          <h3 className='labels'>Pill</h3>
          <Badge color='gray' shape='pill' />
          <Badge color='red' shape='pill' />
          <Badge color='yellow' shape='pill' />
          <Badge color='green' shape='pill' />
          <Badge color='blue' shape='pill' />
          <Badge color='indigo' shape='pill' />
          <Badge color='purple' shape='pill' />
          <Badge color='pink' shape='pill' />
        </div>
      </div>

      {/* BANNERS */}
      <div className='banner__container mb'>
        <h1 className='headers'>Banners</h1>

        <div className='banner__container--inner'>
          <h3 className='labels'>Success</h3>
          <Banner status={'SUCCESS'}>
            <Banner.Title>Congratulations</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
          </Banner>
          <Banner status={'SUCCESS'}>
            <Banner.Title>Congratulations</Banner.Title>
          </Banner>
        </div>

        <div className='banner__container--inner'>
          <h3 className='labels'>Warning</h3>
          <Banner status={'WARNING'}>
            <Banner.Title>Attention</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Content>
          </Banner>
          <Banner status={'WARNING'}>
            <Banner.Title>Attention</Banner.Title>
          </Banner>
        </div>

        <div className='banner__container--inner'>
          <h3 className='labels'>Error</h3>
          <Banner status={'ERROR'}>
            <Banner.Title>There is a problem with your application</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Content>
          </Banner>
          <Banner status={'ERROR'}>
            <Banner.Title>There is a problem with your application</Banner.Title>
          </Banner>
        </div>

        <div className='banner__container--inner'>
          <h3 className='labels'>Neutral</h3>
          <Banner status={'INFO'}>
            <Banner.Title>Update available</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
          </Banner>
          <Banner status={'INFO'}>
            <Banner.Title>Update available</Banner.Title>
          </Banner>
        </div>
      </div>


      {/* CARDS */}
      <div className='card__container mb'>
        <h1 className='headers'>Cards</h1>

        <div className='card__container--inner'>
          <h3 className='labels'>Default</h3>
          <Card>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
          </Card>
        </div>

        <div className='card__container--inner'>
          <h3 className='labels'>Customized</h3>
          <Card icon={<FaAccessibleIcon />} cardBackground='navy' titleColor='yellow' contentColor='pink'>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
          </Card>
        </div>

        <div className='card__container--inner'>
          <h3 className='labels'>No Title</h3>
          <Card>
            <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
          </Card>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className='testimonials__container mb'>
        <h1 className='headers'>Testimonials</h1>

        <Testimonial imgSrc='./default-img.jpg'>
          <Testimonial.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial.Content>
          <Testimonial.Name>May Andersons</Testimonial.Name>
          <Testimonial.Role>Workcation, CTO</Testimonial.Role>
        </Testimonial>

        <Testimonial bgColor='navy' imgSrc='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
          <Testimonial.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial.Content>
          <Testimonial.Name>John Doe</Testimonial.Name>
          <Testimonial.Role>Accompanies, CEO</Testimonial.Role>
        </Testimonial>

        <Testimonial>
          <Testimonial.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial.Content>
          <Testimonial.Name>May Andersons</Testimonial.Name>
          <Testimonial.Role>Workcation, CTO</Testimonial.Role>
        </Testimonial>

        <Testimonial bgColor='pink'>
          <Testimonial.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial.Content>
          <Testimonial.Name>May Andersons</Testimonial.Name>
          <Testimonial.Role>Workcation, CTO</Testimonial.Role>
        </Testimonial>
      </div>

      <div className='tooltip__container mb'>
        <h1 className='headers'>Tooltip</h1>

        <div className='tooltip__container--inner'>
          <div className='tooltip__container--variant'>
            <Tooltip style='BOLD' variant='NORMAL'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>
            <Tooltip style='BOLD' variant='BLUE'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>
            <Tooltip style='BOLD' variant='PINK'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>
            <Tooltip style='BOLD' variant='GREEN'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>
          </div>

          <div className='tooltip__container--variant'>
            <Tooltip style='LIGHT' variant='NORMAL'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>

            <Tooltip style='LIGHT' variant='BLUE'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>

            <Tooltip style='LIGHT' variant='PINK'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>

            <Tooltip style='LIGHT' variant='GREEN'>
              <Tooltip.Title>Archive notes</Tooltip.Title>
              <Tooltip.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Content>
            </Tooltip>
          </div>
        </div>

      </div>

      <div className='toast__container'>
        <h1 className='headers'>Toast Popups</h1>

        <div className='toast__container--inner'>
          <Toast status="SUCCESS">
            <Toast.Title>Success</Toast.Title>
            <Toast.Content>Your work has been saved</Toast.Content>
          </Toast>

          <Toast status="INFO">
            <Toast.Title>Information</Toast.Title>
            <Toast.Content>Please read updated information</Toast.Content>
          </Toast>

          <Toast status="WARNING">
            <Toast.Title>Warning</Toast.Title>
            <Toast.Content>A network error was detected</Toast.Content>
          </Toast>

          <Toast status="ERROR">
            <Toast.Title>Error</Toast.Title>
            <Toast.Content>Please re-save your work again</Toast.Content>
          </Toast>
        </div>
      </div>
    </>
  )
}


// no image
// - Default Logo in middle
// - no quote svg
// - name and title format different
// - background different