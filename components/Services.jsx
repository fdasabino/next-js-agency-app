import React from "react";
import Link from "next/link";
import styles from "../styles/components_styles/Services.module.css";
import Image from "next/image";

function Services({ services }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we do?</h1>
      <h3 className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolor atque? Consequatur
        iste quae harum.
      </h3>
      <div className={styles.services}>
        {services.map((service) => (
          //use passHref if nesting a DOM element inside a nextJS Link.
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.description}>{service.description}</div>
              <span className={styles.category}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video src={`/img/${service.video}`} autoPlay loop className={styles.video} />
                ) : (
                  <Image
                    alt={service.desc}
                    src={`/img/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
