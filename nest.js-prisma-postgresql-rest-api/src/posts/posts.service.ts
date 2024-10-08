import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  // Tüm gönderileri getir
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  // ID'ye göre bir gönderiyi getir
  async findOne(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });
    if (!post) {
      throw new NotFoundException('Gönderi bulunamadı');
    }
    return post;
  }

  // Yeni bir gönderi oluştur
  async create(postData: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data: postData,
    });
  }

  // Bir gönderiyi güncelle
  async update(id: string, postData: Prisma.PostUpdateInput): Promise<Post> {
    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });
    if (!existingPost) {
      throw new NotFoundException('Gönderi bulunamadı');
    }
    return this.prisma.post.update({
      where: { id },
      data: postData,
    });
  }

  // Bir gönderiyi sil
  async remove(id: string): Promise<void> {
    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });
    if (!existingPost) {
      throw new NotFoundException('Gönderi bulunamadı');
    }
    await this.prisma.post.delete({
      where: { id },
    });
  }
}
