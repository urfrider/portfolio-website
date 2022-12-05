import { motion } from "framer-motion";
import { LineDivider } from "../App";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">CONTACT</span> ME
          </p>
          <div className="flex md:justify-end my-5">
            <LineDivider width="w-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact.png" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/54652e445ecf2b371b0108c98a3bd123"
            method="POST"
          >
            <input
              className="w-full bg-yellow font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: "NAME field is required.",
                maxLength: {
                  value: 100,
                  message: "Max length is 100 char.",
                },
              })}
            />
            <p className="text-red mt-1">{errors?.name?.message}</p>

            <input
              className="w-full bg-yellow font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: "EMAIL field is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email",
                },
              })}
            />
            <p className="text-red mt-1">{errors?.email?.message}</p>

            <textarea
              className="w-full bg-yellow font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="MESSAGE"
              rows={+4}
              cols={+50}
              {...register("message", {
                required: "MESSAGE field is required.",
                maxLength: {
                  value: 2000,
                  message: "Max length is 2000 char.",
                },
              })}
            />
            <p className="text-red mt-1">{errors?.message?.message}</p>

            <button
              className="p-5 bg-red font-semibold text-black mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
