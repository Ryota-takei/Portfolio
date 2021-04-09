import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/react";
import styles from "./ContactForm.module.css";
import { Spinner } from "@chakra-ui/react";
import { useContact } from "../../../../hooks/useContact";
import {Input} from "../../../../types/InputTypes"



export const ContactForm = () => {
  const { sendValue, loading } = useContact();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data:Input) => {
    sendValue(data)
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <label>
          <p className={styles.labelTitle}>Name</p>
          <input
            type="text"
            placeholder=" お名前"
            {...register("name", { required: true, maxLength: 100 })}
          />
          {errors.name && (
            <p className={styles.alert}>お名前をご記入ください</p>
          )}
        </label>
        <label>
          <p className={styles.labelTitle}>Email</p>
          <input
            type="text"
            placeholder=" メールアドレス"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && (
            <p className={styles.alert}>正しいメールアドレスをご記入ください</p>
          )}
        </label>
        <label>
          <p className={styles.labelTitle}>Contact</p>
          <textarea
            placeholder=" お問い合わせ内容"
            {...register("contact", {
              required: true,
            })}
          />
          {errors.contact && (
            <p className={styles.alert}>お問い合わせ内容をご記入ください</p>
          )}
        </label>
        <div className={styles.btnWrapper}>
          {loading ? (
            <Button
              disabled={true}
              className={styles.btn}
              type="submit"
              colorScheme="teal"
              variant="outline"
            >
              <Spinner />
              送信する
            </Button>
          ) : (
            <Button
              className={styles.btn}
              type="submit"
              colorScheme="teal"
              variant="outline"
            >
              送信する
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
