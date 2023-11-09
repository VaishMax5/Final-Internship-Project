
import { formateDate } from '../../utils/formateDate';
const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
              About of
              <span className="text-irisBlueColor font-bold  text-[24px] leading-9" >
                Virat Kohli
              </span>
            </h3>
            <p className="text_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur aut dolores eius facilis. Eius ex at dicta vero sit expedita beatae saepe temporibus vitae ratione, eligendi cum quaerat nobis dolorem molestias ipsam est totam delectus incidunt! Quis, pariatur id eos cupiditate sed ad sunt tempore laborum placeat asperiores repellat!
            </p>
         </div>
        
        <div className="mt-12">
          <h3 className='text-[20px] leading-[30px] text-headingColor font-semobold'>
            Education
          </h3>

          <ul className='pt-4 md:p-5'>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
              <div>
                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-headingColor">
                  PHD in Surgeon
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-headingColor">
                  New APPOLO Hospital,New York.
              </p>

            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
              <div>
                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                  {formateDate("12-04-2010")} - {formateDate("09-13-2014")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-headingColor">
                  PHD in Surgeon
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-headingColor">
                  New APPOLO Hospital,New York.
              </p>

            </li>
          </ul>

        </div>
    <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semobold'>
        Experience
      </h3>

      <ul className='gird sm:grid-cols-2 gap-[30px] pt-4 md-p-5'>
        <li className='p-4 rounded bg-[#fff9ea]'>
          <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
          {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
          </span>
          <p className="text-[16px] leading-6 font-medium text-headingColor">
            Sr.Surgeon
          </p>
          <p className="text-[14px] leading-6 font-medium text-headingColor">
            New APPOLO Hospital,New York.
          </p>

        </li>
        <li className='p-4 rounded bg-[#fff9ea]'>
          <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
          {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
          </span>
          <p className="text-[16px] leading-6 font-medium text-headingColor">
            Sr.Surgeon
          </p>
          <p className="text-[14px] leading-6 font-medium text-headingColor">
            New APPOLO Hospital,New York.
          </p>

        </li>
      </ul>
    </div>


    </div>
  );
};

export default DoctorAbout