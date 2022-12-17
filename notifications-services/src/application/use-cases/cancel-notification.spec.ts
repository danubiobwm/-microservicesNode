import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { CancelNotification } from "./cancel-notification";
import { Content } from "@application/entities/content";
import { NotificationNotFound } from "./errors/notification-not-found";

describe("Cancel Notification", () => {
  it("Should be able to cancel a notification", async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = await new Notification({
      category: "Social",
      content: new Content("this is a notification"),
      recipientId: "example-recipientId",
    });

    await notificationRepository.create(notification);
    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date)
    );
  });

  it("Should be able to cancel a non existing notification", async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(async () => {
      await cancelNotification.execute({
        notificationId: "fake-notification-id",
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
