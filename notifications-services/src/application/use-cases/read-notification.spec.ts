import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";
import { NotificationNotFound } from "./errors/notification-not-found";
import { ReadNotification } from "./read-notification";

describe("Read Notification", () => {
  it("Should be able to Read a notification", async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationRepository);

    const notification = await new Notification({
      category: "Social",
      content: new Content("this is a notification"),
      recipientId: "example-recipientId",
    });

    await notificationRepository.create(notification);
    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date)
    );
  });

  it("Should be able to Read a non existing notification", async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationRepository);

    expect(async () => {
      await readNotification.execute({
        notificationId: "fake-notification-id",
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
