import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  // Service exists
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // =========================
  // GET ALL USERS
  // =========================

  describe('findAll', () => {
    it('should return all users', () => {
      const result = service.findAll();

      expect(result.status).toBe(200);
      expect(result.data).toBeDefined();
      expect(result.data).toHaveLength(3);
      expect(result.count).toBe(3);
    });
  });

  // =========================
  // GET USER
  // =========================

  describe('findOne', () => {
    it('should return one user', () => {
      const result = service.findOne(1);

      expect(result).toBeDefined();
      expect(result.id).toBe(1);
      expect(result.name).toBe('Omar Elhelaly');
      expect(result.email).toBe('omar@example.com');
    });

    it('should throw NotFoundException if user does not exist', () => {
      expect(() => service.findOne(999)).toThrow(
        NotFoundException,
      );
    });

    it('should throw correct error message', () => {
      expect(() => service.findOne(999)).toThrow(
        'User not found',
      );
    });
  });

  // =========================
  // CREATE USER
  // =========================

  describe('create', () => {
    it('should create a new user', () => {
      const input = {
        id: 10,
        name: 'Test User',
        email: 'test@example.com',
        phoneNumber: '+201012345678',
      };

      const result = service.create(input);

      expect(result.status).toBe(201);
      expect(result.message).toBe(
        'User created successfully',
      );

      expect(result.data).toEqual(
        expect.objectContaining({
          id: 10,
          name: 'Test User',
          email: 'test@example.com',
          phoneNumber: '+201012345678',
        }),
      );
    });

    it('should throw error if user already exists', () => {
      const input = {
        id: 1,
        name: 'Another User',
        email: 'another@example.com',
      };

      expect(() => service.create(input)).toThrow(
        'User already exists',
      );
    });
  });

  // =========================
  // UPDATE USER
  // =========================

  describe('update', () => {
    it('should update user successfully', () => {
      const input = {
        id: 1,
        name: 'Omar Updated',
      };

      const result = service.update(1, input);

      expect(result.status).toBe(200);
      expect(result.message).toBe(
        'User updated successfully',
      );

      expect(result.data).toEqual(
        expect.objectContaining({
          id: 1,
          name: 'Omar Updated',
        }),
      );
    });

    it('should throw NotFoundException if user does not exist', () => {
      const input = {
        id: 999,
        name: 'Test',
      };

      expect(() => service.update(999, input)).toThrow(
        NotFoundException,
      );
    });

    it('should throw correct error message when updating non-existing user', () => {
      const input = {
        id: 999,
        name: 'Test',
      };

      expect(() => service.update(999, input)).toThrow(
        'User not found',
      );
    });
  });

  // =========================
  // DELETE USER
  // =========================

  describe('remove', () => {
    it('should delete user successfully', () => {
      const result = service.remove(3);

      expect(result.status).toBe(200);
      expect(result.message).toBe(
        'User deleted successfully',
      );
    });

    it('should throw NotFoundException if user does not exist', () => {
      expect(() => service.remove(999)).toThrow(
        NotFoundException,
      );
    });

    it('should throw correct error message when deleting non-existing user', () => {
      expect(() => service.remove(999)).toThrow(
        'User not found',
      );
    });
  });
});