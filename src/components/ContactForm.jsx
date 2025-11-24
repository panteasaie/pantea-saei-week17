import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../validation/ContactsSchema";
import styles from "./Contacts.module.css";
function ContactForm({
  defaultValues,
  onSubmit,
  submitLabel,
  contacts,
  currentId,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    context: { contacts, currentId },
  });
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className={styles.form}>
        <div className={styles.field}>
          <input name="name" {...register("name")} placeholder="name" />
          <div className={styles.errorWrapper}>
            {errors.firstName && (
              <p className={styles.errorText}>{errors.firstName.message}</p>
            )}
          </div>
        </div>
        <div className={styles.field}>
          <input
            name="lastName"
            {...register("lastName")}
            placeholder="lastName"
          />
          <div className={styles.errorWrapper}>
            {errors.lastName && (
              <p className={styles.errorText}>{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className={styles.field}>
          <input name="email" {...register("email")} placeholder="email" />
          <div className={styles.errorWrapper}>
            {errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className={styles.field}>
          <input name="phone" {...register("phone")} placeholder="phone" />
          <div className={styles.errorWrapper}>
            {errors.phone && (
              <p className={styles.errorText}>{errors.phone.message}</p>
            )}
          </div>
        </div>
        <button type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}

export default ContactForm;
