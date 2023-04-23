import {ImageUploadForm} from './image_upload_form';
export const runtime = 'edge';

export default function Page() {
  return (
    <>
      <section className='col-span-10 col-start-2 mt-20 sm:col-span-8 sm:col-start-3 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5'>
        <div className='mockup-window border bg-base-300'>
          <div className='mx-auto flex flex-col bg-base-200 px-4 py-4  md:px-8'>
            <article className='border-y-4 border-solid border-base-300 text-center text-primary'>
              <h1 className='text-lg'>Ladda upp till Galleriet</h1>
              <p className='mx-auto w-5/6 text-sm'>
                Dela kvällens bilder med resten av sällskapet genom att välja
                era bilder och sedan klicka &quot;Ladda upp&quot;.
              </p>
            </article>
            <ImageUploadForm />
          </div>
        </div>
      </section>
    </>
  );
}
