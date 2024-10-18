import { useForm } from "react-hook-form";
import useGetNewInstructor from "../AdminHooks/useGetNewInstructor";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ModalUpdateCourse = ({ item, refetch }) => {
    const [newInstructor, , loadInstructor] = useGetNewInstructor();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const assignData = {
            ...item,
            ...data
        }
        let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

        axiosSecure.patch('/courseAssignInstructor', assignData)
        .then(res=>{
            if(res.data.status){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })
        
    };
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className={`px-2 py-2 btn-accent rounded font-semibold ${item.instructor === 'not-assigned' ? '' : 'hidden'}`} onClick={() => document.getElementById('my_modal_1').showModal()}>Assign Instructor</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">Select an Instructor</h3>
                    <form className="flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-2 gap-3 py-2">
                            {
                                newInstructor.map(inst => (
                                    <div className="flex items-center gap-2" key={inst.email}>
                                        <input className="radio radio-info" type="radio" id={`${inst.email}`} value={inst.email} {...register("inst_email", {})} />
                                        <input className="hidden" value={`${inst.name}`} {...register("instructor", {})} />
                                        <label className="capitalize" htmlFor={`${inst.email}`}>{inst.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                        <textarea className="textarea textarea-accent w-full" placeholder="Instructor Details" {...register("details", {})} />
                        {/* want to pass item when I submit the form */}
                        <button type="submit" className="btn-accent p-2 rounded-md font-semibold">Assign</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ModalUpdateCourse;
