/**
 * Jest Test for Category Entity
 */
import { Category } from './category.entity';
import { User } from '../../users/entities/user.entity';

describe('Category Entity', () => {
  // Test case for checking the name property
  it('should have a name property', () => {
    const category = new Category();
    category.name = 'Test Category';

    expect(category.name).toBe('Test Category');
  });

  // Test case for checking the many-to-many relationship with users
  it('should have a many-to-many relationship with users', () => {
    const category = new Category();
    const user = new User();

    category.users = [user];

    expect(category.users.length).toBe(1);
    expect(category.users[0]).toBe(user);
  });
});
