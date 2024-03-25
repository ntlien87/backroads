import {Heading, Tour} from '../components'
import { tours } from '../data'

const Tours = () => {
  return (
    <div className="mt-20 " id='tours'>
      <Heading title="featured" subTitle="tours" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  )
}
export default Tours