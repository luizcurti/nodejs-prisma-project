import { prisma } from '../../../../database/prismaClient';

interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: ICreateDelivery) {
    const deliverymen = await prisma.deliveryman.findMany();

    if (deliverymen.length === 0) {
      throw new Error("No available deliveryman found.");
    }

    const randomIndex = Math.floor(Math.random() * deliverymen.length);
    const randomDeliveryman = deliverymen[randomIndex];

    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
        id_deliveryman: randomDeliveryman.id
      },
    });

    return delivery;
  }
}
